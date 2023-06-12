import React from 'react';
import '../css/Categories.css';
import { formatText } from '../HandlingAPI/handleAPI';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function CategoriesPage() {
    const categories = ['science', 'film_and_tv', 'music', 'food_and_drink', 'geography', 'art_and_literature', 'sport_and_leisure', 'general_knowledge', 'history'];

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
                return <Button className='cat-btn' onClick={() => navigate(`/categories/${category}`)} key={category}>{formatText(category)}</Button>
            })}
        </div>
    );
}