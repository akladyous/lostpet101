import { Axios } from '../lib/api/Axios.jsx';
import React from 'react';

function configToObject(config) {
  if (typeof config === 'string') {
    return { url: config };
  }
  return Object.assign({}, config);
}
const DEFAULT_OPTIONS = {
  manual: false,
  autoCancel: true,
};

const actions = {
  START: 'START',
  END: 'END',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};
const initializeState = {
  isLoading: false,
  isError: false,
  error: null,
  isSuccess: false,
  data: null,
};
function reducer(state, action) {
  switch (action.type) {
    case actions.START:
      return { ...state, isLoading: true, error: null };
    case actions.END:
      return { ...state, isLoading: false };
    case actions.SUCCESS:
      return {
        ...state,
        isSuccess: true,
        data: action.payload,
        isError: false,
        error: null,
      };
    case actions.ERROR:
      return { ...state, isError: true, error: { ...action.payload } };
    default:
      break;
  }
}
export function useAxios(_config, _options) {
  const [state, dispatch] = React.useReducer(reducer, initializeState);

  const controller = React.useRef(new AbortController());

  const config = React.useMemo(() => {
    return Object.assign(configToObject(_config), {
      signal: controller.current.signal,
    });
  }, [_config]);

  const options = React.useMemo(() => {
    return { ...DEFAULT_OPTIONS, ..._options };
  }, [_options]);

  const cancelOutstandingRequest = React.useCallback(() => {
    if (controller.current) {
      controller.current.abort();
    }
  }, []);

  const request = React.useCallback(async function (_config) {
    _config ??= config;
    try {
      dispatch({ type: actions.START });
      const response = await Axios.request(_config);
      dispatch({ type: actions.SUCCESS, payload: response.data });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: actions.ERROR,
          payload: {
            data: error.response.data,
            status: error.response.status,
          },
        });
      } else {
        dispatch({
          type: actions.ERROR,
          payload: { data: { message: error.message }, status: error.code },
        });
      }
    } finally {
      dispatch({ type: actions.END });
    }
  }, []);

  React.useEffect(() => {
    if (!options.manual) {
      request(config);
    }

    return () => {
      if (options.autoCancel) {
        cancelOutstandingRequest();
      }
    };
  }, [options.manual, options.autoCancel]);

  return [
    request,
    {
      isLoading: state.isLoading,
      isError: state.isError,
      error: state.error,
      isSuccess: state.isSuccess,
      data: state.data,
    },
  ];
}
