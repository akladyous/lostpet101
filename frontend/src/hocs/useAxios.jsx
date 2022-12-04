import { api } from '../lib/api/api.js'
import React from 'react';

function configToObject(config) {
    if (typeof config === 'string') {
        return { url: config }
    }
    return Object.assign({}, config);
};
const DEFAULT_OPTIONS = {
    manual: false,
    autoCancel: true
}

const actions = {
    START: 'START',
    END: 'END',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}
const initializeState = {
    loading: false,
    error: null,
    data: null
}
function reducer(state, action) {
    switch (action.type) {
        case actions.START:
            return { ...state, loading: true, error: null }
        case actions.END:
            return { ...state, loading: false }
        case actions.SUCCESS:
            return { ...state, data: action.payload }
        case actions.ERROR:
            return { ...state, error: action.payload }
        default:
            break;
    }
}
export default function useAxios(_config, _options) {

    const [state, dispatch] = React.useReducer(reducer, initializeState)

    const controller = React.useRef(new AbortController());

    const config = React.useMemo(() => {
        return Object.assign(
            configToObject(_config),
            { signal: controller.current.signal }
        )
    }, [_config]);

    const options = React.useMemo(() => {
        return { ...DEFAULT_OPTIONS, ..._options }
    }, [_options]);

    const cancelOutstandingRequest = React.useCallback(() => {
        if (controller.current) {
            controller.current.abort();
        }
    }, []
    );

    const request = React.useCallback(async function (config) {
        try {
            dispatch({ type: actions.START })
            const response = await api.request(config)
            dispatch({ type: actions.SUCCESS, payload: response.data })
        } catch (error) {
            if (error.response) {
                dispatch({ type: actions.ERROR, payload: error.response.data.error })
            } else {
                dispatch({ type: actions.ERROR, payload: error.message })
            }
        } finally {
            dispatch({ type: actions.END })
        }
    }, [])

    React.useEffect(() => {
        console.log('useAxios useeffect')
        if (!options.manual) {
            request(config);
        }

        return () => {
            if (options.autoCancel) {
                cancelOutstandingRequest()
            }
        }
    }, [options.manual, options.autoCancel])

    return [state, request, cancelOutstandingRequest]

};
