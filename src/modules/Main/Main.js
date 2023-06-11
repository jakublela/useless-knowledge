import React from 'react';
import './Main.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home.js';
import TriviaPage from '../pages/TriviaPage';
import CategoriesPage from '../pages/Categories/Categories.js';
import CreatePage from '../pages/Create.js';
import SavedPage from '../pages/Saved.js';
import Error404 from '../pages/404.js';

function Main() {
    return (
        <Routes>
            <Route 
                path='/'
                element={<HomePage/>}
                />
            <Route 
                path='/random'
                element={<TriviaPage/>}
                />
            <Route 
                path='/categories'
                element={<CategoriesPage/>}
                />
            <Route
                path='/categories/:tag'
                element={<TriviaPage/>}
                />
            <Route 
                path='/create'
                element={<CreatePage/>}
                />
            <Route 
                path='/saved'
                element={<SavedPage/>}
                />
            <Route
                path='*'
                element={<Error404/>}/>
        </Routes>
    );
}

export default Main;