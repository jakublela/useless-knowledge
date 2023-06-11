import React from 'react';
import { useParams } from 'react-router-dom';

function HomePage() {
    let { tag } = useParams();
    return (
        <div className='home-main'>
            <h1>Home</h1>
            <h3>What can you do here:</h3>
            <h5>
                <ul className='home-faq'>
                    <li>Complete dozens of quizes</li>
                    <li>Create new quizes</li>
                    <li>You get to learn near useless knowledge</li>
                </ul>
            </h5>
        </div>
    )
}

export default HomePage;