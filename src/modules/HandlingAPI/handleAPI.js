import React, { useState, useEffect} from 'react';
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
            .then(res => setData(res[0]))
            .then(() => setLoading(false))
            .catch(setError);
    }, [next]);
    console.log("test");
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