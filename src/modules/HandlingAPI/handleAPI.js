import React, { useState, useEffect, useCallback, useMemo} from 'react';
import { Button } from 'react-bootstrap';
import '../Main/Main.css';

function useFetch(url, next) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        if(!url) return
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res))
            .then(() => setLoading(false))
            .catch(setError);
    }, [next, url]);

    return { data, loading, error };
}

export function Fetch({url, renderOnSuccess,
    renderOnLoading = <h1>loading...</h1>,
    renderOnFail = error => (<pre>{JSON.stringify(error, null, 2)}</pre>)}) {
    const [next, setNext] = useState(false);
    const {data, loading, error} = useFetch(url, next);

    if (loading) return renderOnLoading;
    if (error) return renderOnFail(error);
    if (data) return (
        <>
            {renderOnSuccess({data})}
            <Button className='nextQuiz' onClick={() => {setNext(!next)}}>Gib anotha one</Button>
        </>
        );
}

export function useIterator(items = [], initialValue = 0) {
    const [i, setIndex] = useState(initialValue);
    
    const prev = useCallback(() => {
        if (i === 0) return setIndex(items.length - 1);
        setIndex(i - 1);
    }, [i]);
    
    const next = useCallback(() => {
        if (i === items.length - 1) return setIndex(0);
        setIndex(i + 1);
    }, [i]);
    
    const item = useMemo(() => items[i], [i]);
    
    return [item || items[0], prev, next, i];
}
