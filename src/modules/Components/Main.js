import React from 'react';
import '../css/Main.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Quizes from '../pages/TriviaPage.js';
import Tags from '../pages/Tags.js';
import Create from '../pages/Create.js';
import Saved from '../pages/Saved.js';
import Error404 from '../pages/404.js';
import Categories from '../pages/Categories.js';

function Main() {
    return (
        <Routes>
            <Route 
                path='/'
                element={<Home/>}
                />
            <Route 
                path='/random'
                element={<Quizes/>}
                />
            <Route 
                path='/tags'
                element={<Tags/>}
                />
            <Route 
                path='/categories'
                element={<Categories/>}
                />
            <Route
                path='/categories/:tag'
                element={<Quizes/>}
                />
            <Route 
                path='/create'
                element={<Create/>}
                />
            <Route 
                path='/saved'
                element={<Saved/>}
                />
            <Route
                path='*'
                element={<Error404/>}/>
        </Routes>
    );
}

export default Main;