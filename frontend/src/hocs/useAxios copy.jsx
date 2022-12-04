import { api } from '../lib/api/api.js'
import { useState, useEffect, useCallback } from "react";
import { useRef } from 'react';

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

export default function useAxios(axiosParams, executeOnMount) {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const isMounted = useRef(false)

    const fetchData = useCallback(async (axiosParams) => {
        const controller = new AbortController();
        Object.assign(axiosParams, { signal: controller.signal })

        try {
            const response = await api.request(axiosParams)
            setData(response.data)
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error)
            } else {
                setError(error.message)
            }
        } finally {
            setLoading(false)
            controller.abort();
            return { data, loading, error }
        }
    }, [data, loading, error])

    useEffect(() => {
        isMounted.current = true

        if (!executeOnMount) return
        fetchData();

        return () => { isMounted.current = false }
    }, [executeOnMount, axiosParams, fetchData])

    return { data, loading, error, handler: fetchData }

};
