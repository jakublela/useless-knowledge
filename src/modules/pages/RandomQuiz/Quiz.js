import React from 'react';
import { useParams } from 'react-router-dom';
import { Trivia } from '../../HandlingAPI/Trivia';
import { Fetch } from '../../HandlingAPI/handleAPI';
import './Quiz.css';

function QuizPage() {
    let { type } = useParams();
    let url = "https://the-trivia-api.com/v2/questions?" + new URLSearchParams({
        limit: "1"
    });
    
    return (
        <div className='main'>
            <h1>Quiz</h1>
            <Fetch url={url} renderOnSuccess={Trivia}/>
        </div>
    )
}

export default QuizPage;