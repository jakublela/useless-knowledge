import React from 'react';
import './Main.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home.js';
import QuizPage from '../pages/RandomQuiz/Quiz.js';
import CategoriesPage from '../pages/Categories.js';
import CreatePage from '../pages/Create.js';
import SavedPage from '../pages/Saved.js';

function Main() {
    return (
        <Routes>
            <Route 
                path='/'
                element={<HomePage/>}
                />
            <Route 
                path='/random/:type'
                element={<QuizPage/>}
                />
            <Route 
                path='/categories/:type'
                element={<CategoriesPage/>}
                />
            <Route 
                path='/create/:type'
                element={<CreatePage/>}
                />
            <Route 
                path='/saved/:type'
                element={<SavedPage/>}
                />
        </Routes>
    );
}

export default Main;