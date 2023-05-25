import React from 'react';
import { useParams } from 'react-router-dom';

function RandomPage() {
    let { type } = useParams();
    return (
        <>
         <h1>This is random page</h1>
         <p>This is random {type} page</p>
        </>
    )
}

export default RandomPage;