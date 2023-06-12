import React, { useEffect } from 'react';
import './css/Categories.css';
import { FetchTags, formatText } from '../HandlingAPI/handleAPI';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function CategoriesPage() {
    const categories = ['science', 'film_and_tv', 'music', 'history', 'geography', 'art_and_literature', 'sport_and_leisure', 'general_knowledge', 'food_and_drink'];

    return (

        <div className='main'>
            <h1 className='category-header'>Categories</h1>
            <Categories categories={categories}/>
        </div>
    )
}

export function Categories({categories}) {
    const navigate = useNavigate();

    return (
        <div id='categories'>
            {categories.map((category) => {
                return <Button onClick={() => navigate(`/categories/${category}`)} key={category}>{formatText(category)}</Button>
            })}
        </div>
    );
}