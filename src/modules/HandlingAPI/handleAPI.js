import React, { useState, useEffect} from 'react';

function useFetch(url) {
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

export function Fetch({url, renderOnSuccess, 
    renderOnLoading = <h1>loading...</h1>,
    renderOnFail = error => (<pre>{JSON.stringify(error, null, 2)}</pre>)}) {
    const {data, loading, error} = useFetch(url);

    if (loading) return renderOnLoading;
    if (error) return renderOnFail(error);
    if (data) return renderOnSuccess({data});
}