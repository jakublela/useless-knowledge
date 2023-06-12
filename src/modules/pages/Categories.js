import React, { useEffect } from 'react';
import './css/Categories.css';
import { FetchTags, formatText } from '../HandlingAPI/handleAPI';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function CategoriesPage() {
    let url = "https://the-trivia-api.com/v2/totals-per-tag";

    return (
        <div className='main'>
            <h1 className='category-header'>Categories</h1>
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
                return <Button onClick={() => navigate(`/categories/${tag}`)} key={tag}>{formatText(tag)}</Button>
            })}
        </div>
    );
}