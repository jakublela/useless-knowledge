import React from 'react';
import { useParams } from 'react-router-dom';
import './Categories.css';

function CategoriesPage() {
    let { type } = useParams();
    return (
        <div className='buttons'>
            <button type="button" className="button-raid">Beer Trivia</button>
            <button type="button" className="button-raid">Wine Trivia</button>
            <button type="button" className="button-raid">Space Trivia</button>
            <button type="button" className="button-raid">NASA Trivia</button>
            <button type="button" className="button-raid">Animals Trivia</button>
            <button type="button" className="button-raid">Birds Trivia</button>
            <button type="button" className="button-raid">Astronomy Trivia</button>
            <button type="button" className="button-raid">Plants Trivia</button>
            <button type="button" className="button-raid">Trees Trivia</button>
            <button type="button" className="button-raid">Pets Trivia</button>
            <button type="button" className="button-raid">Stars Trivia</button>
            <button type="button" className="button-raid">Planets Trivia</button>
            <button type="button" className="button-raid">Flowers Trivia</button>
            <button type="button" className="button-raid">Dogs Trivia</button>
            <button type="button" className="button-raid">Comets Trivia</button>
            <button type="button" className="button-raid">Nature Trivia</button>
            <button type="button" className="button-raid">Dinosaurs Trivia</button>
            <button type="button" className="button-raid">Museums Trivia</button>
            <button type="button" className="button-raid">Olympics Trivia</button>
            <button type="button" className="button-raid">Hobbies Trivia</button>
            <button type="button" className="button-raid">Law Trivia</button>
            <button type="button" className="button-raid">Hats Trivia</button>
            <button type="button" className="button-raid">Romans Trivia</button>
            <button type="button" className="button-raid">Cowboys Trivia</button>
            <button type="button" className="button-raid">Language Trivia</button>
            <button type="button" className="button-raid">Flags Trivia</button>
            <button type="button" className="button-raid">Terms Trivia</button>
            <button type="button" className="button-raid">Names Trivia</button>
            <button type="button" className="button-raid">Crime Trivia</button>
            <button type="button" className="button-raid">Codes Trivia</button>
            <button type="button" className="button-raid">Oceans Trivia</button>
            <button type="button" className="button-raid">Fashion Trivia</button>
            <button type="button" className="button-raid">Stamps Trivia</button>
            <button type="button" className="button-raid">Radio Trivia</button>
            <button type="button" className="button-raid">Roads Trivia</button>
            <button type="button" className="button-raid">Palindromes Trivia</button>
        </div>
    )
}

export default CategoriesPage;