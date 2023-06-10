import React from 'react';
import '../Main/Main.css';
import { useParams } from 'react-router-dom';

function CreatePage() {
    let { type } = useParams();
    return (
        <form className='createQuiz'>
            <input type="text" placeholder="¿Qué?" className='createQuizOpt'/><br/>
            <input type="text" placeholder="Category" className='createQuizOpt'/><br/>
            <input type="text" placeholder="Tag" className='createQuizOpt'/><br/>
            <select name="Difficulty" className='createQuizOpt'>
                <option value="Difficulty" hidden>Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select><br/>
            <input type="text" placeholder="Correct Answer" className='createQuizOpt'/><br/>
            <input type="text" placeholder="Incorrect Answer 1" className='createQuizOpt'/><br/>
            <input type="text" placeholder="Incorrect Answer 2" className='createQuizOpt'/><br/>
            <input type="text" placeholder="Incorrect Answer 3" className='createQuizOpt'/><br/>
            <button type="submit" className='createQuizOpt'>Submit</button>
        </form>
    )
}

export default CreatePage;