import React from 'react';
import { useParams } from 'react-router-dom';

function HomePage() {
    let { tag } = useParams();
    return (
        <>
         <h1>This is Home page</h1>
         <p>This is Home {tag} page</p>
        </>
    )
}

export default HomePage;