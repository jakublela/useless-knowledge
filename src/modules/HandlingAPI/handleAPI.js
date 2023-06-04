import React, { useState, useEffect} from 'react';

export function useFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        if(!url) return
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res[0]))
            .then(() => setLoading(false))
            .catch(setError);
    }, [url]);
    
    return { data, loading, error };
}

