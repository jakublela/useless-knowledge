import React from 'react';
import { useParams } from 'react-router-dom';
import { Trivia } from '../HandlingAPI/Trivia';
import { Fetch } from '../HandlingAPI/handleAPI';

function RandomPage() {
    let { type } = useParams();
    let url = "https://the-trivia-api.com/v2/questions?" + new URLSearchParams({
        limit: "1"
    });
    
    return (
        <>
         <h1>This is random page</h1>
         <p>This is random {type} page</p>
         <Fetch url={url} renderOnSuccess={Trivia}/>
        </>
    )
}

export default RandomPage;