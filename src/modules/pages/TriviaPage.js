import React from 'react';
import { Trivia } from '../HandlingAPI/Trivia';
import { FetchTrivia } from '../HandlingAPI/handleAPI';
import '../Main/Main.css';
import { useParams } from 'react-router';

export default function TriviaPage() { 
    let { tag } = useParams();
    let url = "https://the-trivia-api.com/v2/questions?" + new URLSearchParams({limit: "4"});
    if (!tag) console.log(tag);

    return (
        <div className='main'>
            <h1>Quiz</h1>
            <FetchTrivia url={url} renderOnSuccess={Trivia} />
        </div>
    )
}