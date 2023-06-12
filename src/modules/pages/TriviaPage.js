import React from 'react';
import { FetchTrivia } from '../HandlingAPI/handleAPI';
import '../css/Main.css';
import { useParams } from 'react-router';

export default function TriviaPage() { 
    let { tag, category } = useParams();
    let url = new URL("https://the-trivia-api.com/v2/questions?"); 
    url.searchParams.append("limit", 4);
    if (tag) url.searchParams.append("tags", tag);
    if (category) url.searchParams.append("categories", category);

    return (
        <div className='main'>
            <h2>Quiz</h2>
            <FetchTrivia url={url.href}/>
        </div>
    )
}