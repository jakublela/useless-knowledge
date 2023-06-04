import React from 'react';

export function Trivia({data}) {
    return (<div>
            <h2>trivia</h2>
            <ul>
                <li>Id: {data.id}</li>
                <li>Category: {data.category}</li>
                <li>Difficulty: {data.difficulty}</li>
                <li>Question: {data.question.text}</li>
                <li>Answer: {data.correctAnswer}</li>
                <li>Incorrect answers:<ul>
                    {data.incorrectAnswers.map((inc) => (
                        <li>{inc}</li>
                    ))}
                </ul></li>
                <li>Tags:<ul>
                    {data.tags.map((tag) => (
                        <li>{tag}</li>
                    ))}
                </ul></li>
            </ul>
        </div>)
}