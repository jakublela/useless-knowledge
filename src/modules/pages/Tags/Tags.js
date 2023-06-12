import React, { useEffect } from 'react';
import './Tags.css';
import { FetchTags, formatText } from '../../HandlingAPI/handleAPI';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function TagsPage() {
    let url = "https://the-trivia-api.com/v2/totals-per-tag";

    return (
        <div className='main'>
            <h1 className='tags-header'>Tags</h1>
            <FetchTags url={url} renderOnSuccess={Tags}/>
        </div>
    )
}

export function Tags({tags}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!tags) return
    }, [tags])

    return (
        <div id='tag'>
            {tags.map((tag) => {
                return <Button onClick={() => navigate(`/tag/${tag}`)} key={tag}>{formatText(tag)}</Button>
            })}
        </div>
    );
}