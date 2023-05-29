import React, { useState, useEffect} from 'react';

export function Trivia({ url }) {
    url = "as"
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [trivia, setTrivia] = useState();

    console.log("test");
    useEffect(() => {
        if(!url) return
        setLoading(true);
        fetch("https://the-trivia-api.com/v2/questions?" + new URLSearchParams({
            limit: "1"
        }))
            .then(res => res.json())
            .then(data => setTrivia(data[0]))
            .then(() => setLoading(false))
            .catch(setError);
    }, [url]);

    console.log(trivia);

    if (loading) return <p>loading...</p>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!trivia) return null;

    trivia.incorrectAnswers.map((ans) => console.log(ans));

    return (
        <div>
            <h2>trivia</h2>
            <ul>
                <li>Id: {trivia.id}</li>
                <li>Category: {trivia.category}</li>
                <li>Difficulty: {trivia.difficulty}</li>
                <li>Question: {trivia.question.text}</li>
                <li>Answer: {trivia.correctAnswer}</li>
                <li>Incorrect answers:<ul>
                    {trivia.incorrectAnswers.map((inc) => (
                        <li>{inc}</li>
                    ))}
                </ul></li>
                <li>Tags:<ul>
                    {trivia.tags.map((tag) => (
                        <li>{tag}</li>
                    ))}
                </ul></li>
            </ul>
        </div>
            )
    
}


