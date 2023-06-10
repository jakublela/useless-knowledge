import React, { useEffect } from 'react';
import './Categories.css';
import { FetchTags } from '../../HandlingAPI/handleAPI';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function CategoriesPage() {
    let url = "https://the-trivia-api.com/v2/tags";
    
    return (
        <div className='main'>
            <h1>Quiz</h1>
            <FetchTags url={url} renderOnSuccess={Categories}/> 
        </div>
    )
}

export function Categories({tags}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!tags) return
    }, [tags])

    return (
        <div id='categories'>
            {tags.map((tag) => {
                return <Button onClick={() => navigate(`/trivia/${tag}`)} key={tag}>{tag}</Button>
            })}
        </div>
    );
}