import React from 'react';
import { useParams } from 'react-router-dom';

function SavedPage() {
    let { type } = useParams();
    return (
        <>
         <h1>This is saved page</h1>
         <p>This is saved {type} page</p>
        </>
    )
}

export default SavedPage;