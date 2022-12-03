import axios from 'axios';
import { api } from '../lib/api/api.js'
import { useState, useEffect, useMemo } from "react";
import { useRef } from 'react';
import { useCallback } from 'react';

const DEFAULT_CONFIG = {
    method: 'get',
    controller: null,
    data: null,
}

export default function useAxios(_config) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const config = useMemo(
        () => {
            if (typeof config === 'string') {
                return { url: config }
            }
            var configuration = { ...DEFAULT_CONFIG };
            if (!_config.controller) {
                Object.assign(configuration, { controller: new AbortController() })
            }
            if (_config.data) {
                Object.assign(configuration, { data: JSON.stringify(_config.data) })
            }
        }
        , [])

    const request = async (url, data, controller) => {
        debugger
        try {
            const response = await api(config)
            setData(response.data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
            config.signal.abort()
        }
    }
    useEffect(() => {
        if (!submitting) return
        setLoading(true)
        const controller = new AbortController();
        postData(url, resourceData, controller)

        return () => {
            controller.abort();
        };
    }, [url, submitting])

    return { data, loading, error, handler: postData }

};
