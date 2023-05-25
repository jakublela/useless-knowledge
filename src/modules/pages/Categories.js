import React from 'react';
import { useParams } from 'react-router-dom';

function CategoriesPage() {
    let { type } = useParams();
    return (
        <>
         <h1>This is categories page</h1>
         <p>This is categories {type} page</p>
        </>
    )
}

export default CategoriesPage;