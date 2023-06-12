import React from 'react';
import { Trivia } from '../HandlingAPI/Trivia';
import { FetchTrivia } from '../HandlingAPI/handleAPI';
import '../Main/Main.css';
import { useParams } from 'react-router';

export default function TriviaPage() { 
    let { tag } = useParams();
    let url = new URL("https://the-trivia-api.com/v2/questions?"); 
    url.searchParams.append("limit", 4);
    if (tag) url.searchParams.append("tags", tag);

    console.log(url.href);
    return (
        <div className='main'>
            <h2>Quiz</h2>
            <FetchTrivia url={url.href} renderOnSuccess={Trivia} />
        </div>
    )
}