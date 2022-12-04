import { api } from '../lib/api/api.js'
import { useState, useEffect, useCallback } from "react";
import { useRef } from 'react';

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
    }, [])

    useEffect(() => {
        isMounted.current = true

        if (!executeOnMount) return
        fetchData();

        return () => { isMounted.current = false }
    }, [executeOnMount, fetchData])

    return { data, loading, error, handler: fetchData }

};
