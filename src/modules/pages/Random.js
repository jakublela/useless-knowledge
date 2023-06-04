import React from 'react';
import { useParams } from 'react-router-dom';
import { Trivia } from '../HandlingAPI/Trivia';
import { useFetch } from '../HandlingAPI/handleAPI';

function RandomPage() {
    let { type } = useParams();
    let url = "https://the-trivia-api.com/v2/questions?" + new URLSearchParams({
        limit: "1"
    });
    const {data, loading, error} = useFetch(url);
    
    if (loading) return <h1>loading...</h1>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;
    
    return (
        <>
         <h1>This is random page</h1>
         <p>This is random {type} page</p>
         <Trivia data={data}/>
        </>
    )
}

export default RandomPage;