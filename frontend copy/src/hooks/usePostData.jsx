import axios from 'axios';
import { useState, useEffect, } from "react";

export default function usePostData(url, resourceData, submitting) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (url, data) => {
        const controller = new AbortController();
        const config = {
            method: 'post',
            url: url,
            data: data,
            signal: controller.signal,
            // ...(controller ??     { signal: controller.signal })
        };
        try {
            const response = await axios(config)
            setData(response.data)
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error)
            } else {
                setError(error.message)
            }
        } finally {
            setLoading(false)
            controller.abort()
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
    }, [url, submitting, resourceData])

    return { data, loading, error, handler: postData }

};
