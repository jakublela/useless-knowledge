import React, { useEffect } from 'react';
import './Categories.css';
import { Fetch, useIterator} from '../../HandlingAPI/handleAPI';
import { Button } from 'react-bootstrap';

export default function CategoriesPage() {
    let url = "https://the-trivia-api.com/v2/tags";
    
    return (
        <div className='main'>
            <h1>Quiz</h1>
            <Fetch url={url} renderOnSuccess={Categories}/>
        </div>
    )
}

function Categories({data}) {
    const [tags, previous, next, i] = useIterator(groupItems(data, 100))

    useEffect(() => {
        if (!tags) return;
    }, [tags]);
        
    return (
        <>
            {tags.map((tag) => {
                return (
                    <Category name={tag}/>
                )
            })}
            <Button onClick={previous}>&lt;</Button>
            <p>{i}</p>
            <Button onClick={next}>&gt;</Button>
        </>
    );
}

function Category({name}) {
    return (
        <Button>{name}</Button>
    )
}

function groupItems(array, perGroup) {
    return array.reduce((result, item, i) => {
        const groupIndex = Math.floor(i/perGroup);

        if (!result[groupIndex]) result[groupIndex] = [];
        result[groupIndex].push(item);
        
        return result;
    }, [])
}