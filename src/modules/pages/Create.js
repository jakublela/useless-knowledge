import React, { useState } from 'react';
import '../Main/Main.css';
import { useParams } from 'react-router-dom';

function CreatePage() {
    let { type } = useParams();
    return (
        <QuizForm/>
    )
}

function QuizForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    return(
        <form className='createQuiz' onSubmit={handleSubmit}>
            <h1>Create a new Quiz</h1><br/>
            <input type="text" name='Question' value={inputs.question} onChange={handleChange} placeholder="¿Qué?" className='createQuizOpt'/><br/>
            <input type="text" name='Category' value={inputs.category} onChange={handleChange} placeholder="Category" className='createQuizOpt'/><br/>
            <input type="text" name='Tag' value={inputs.tag} onChange={handleChange} placeholder="Tag" className='createQuizOpt'/><br/>
            <select name="Difficulty" className='createQuizOpt'>
                <option value="Difficulty" hidden>Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select><br/>
            <input type="text" name='CorrectAns' value={inputs.corrAns} onChange={handleChange} placeholder="Correct Answer" className='createQuizOpt'/><br/>
            <input type="text" name='IncorrectAns1' value={inputs.incorrAns1} onChange={handleChange} placeholder="Incorrect Answer 1" className='createQuizOpt'/><br/>
            <input type="text" name='IncorrectAns2' value={inputs.incorrAns2} onChange={handleChange} placeholder="Incorrect Answer 2" className='createQuizOpt'/><br/>
            <input type="text" name='IncorrectAns3' value={inputs.incorrAns3} onChange={handleChange} placeholder="Incorrect Answer 3" className='createQuizOpt'/><br/>
            <button type="submit" className='createQuizOpt'>Submit</button>
        </form>
    );
}

export default CreatePage;