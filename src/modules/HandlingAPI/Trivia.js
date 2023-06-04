import React from 'react';

export function Trivia({data}) {
    console.log([data.correctAnswer, ...data.incorrectAnswers]);
    return (<div>
            <h2>{data.question.text}</h2>
            <Answers answers={[data.correctAnswer, ...data.incorrectAnswers]}/>
        </div>)
}

function Answers({answers}) {
    return (
        <>Answers:
            <ul>
                {answers.map((ans, i) => (
                    <li key={i}>{ans}</li>
                ))}
            </ul>
        </>)
    
}