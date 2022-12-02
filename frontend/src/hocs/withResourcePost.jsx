import axios from "axios";
import { useState, useEffect } from "react";

export default function withResourcePost(Component) {
    return props => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(null);
        const [error, setError] = useState(null);

        useEffect(() => {

        }, [])

        return <Component {...props} data={data} loading={loading} error={error} />
    };
};
