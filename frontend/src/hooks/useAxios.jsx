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
  loading: false,
  error: null,
  data: null,
};
function reducer(state, action) {
  switch (action.type) {
    case actions.START:
      return { ...state, loading: true, error: null };
    case actions.END:
      return { ...state, loading: false };
    case actions.SUCCESS:
      return { ...state, data: action.payload };
    case actions.ERROR:
      return { ...state, error: action.payload };
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
  //   debugger;
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
          payload: error.response.data.error,
        });
      } else {
        dispatch({ type: actions.ERROR, payload: error.message });
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
    { loading: state.loading, error: state.error, data: state.data },
    request,
    cancelOutstandingRequest,
  ];
}
