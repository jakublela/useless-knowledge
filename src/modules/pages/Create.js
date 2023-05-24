import React from 'react';
import { useParams } from 'react-router-dom';

function CreatePage() {
    let { type } = useParams();
    return (
        <>
         <h1>This is create page</h1>
         <p>This is create {type} page</p>
        </>
    )
}

export default CreatePage;