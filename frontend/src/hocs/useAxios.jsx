import { api } from '../lib/api/api.js'
import { useState, useEffect, useMemo } from "react";
import { useRef } from 'react';
import { useCallback } from 'react';


export default function useAxios(axiosParams) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (axiosParams) => {
        debugger
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
            axiosParams.signal.abort()
        }
    }
    useEffect(() => {

    }, [url, submitting])

    return { data, loading, error, handler: fetchData }

};
