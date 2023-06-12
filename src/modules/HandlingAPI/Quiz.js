import React, { useState } from 'react';
import '../css/Main.css';
import '../css/Quiz.css';
import { Button } from 'react-bootstrap';
import { formatText } from './handleAPI';

const loadJSON = key => key && JSON.parse(sessionStorage.getItem(key));
const saveJSON = (key, data) => sessionStorage.setItem(key, JSON.stringify(data));

export function Quiz({data, isSavable = true}) {
    
    
    const handleSave = data => {
        let savedQuizzes = loadJSON('savedQuizzes')
        let {id, question, correctAnswer, incorrectAnswers, category, difficulty, tags} = data;
        let toSave = [];

        if (savedQuizzes) toSave = savedQuizzes;
       
        if (!toSave.some((quiz) => {return id === quiz.id})) {
            toSave.push({id, question, correctAnswer, incorrectAnswers, category, difficulty, tags})
            saveJSON('savedQuizzes', toSave);
        }
    }
    
    return (
        <div className='quizPost'>{
            data.map((quiz) => {
                let answers = [<Answer text={quiz.correctAnswer} correct={true} key={"correctAnswer"}/>];
                quiz.incorrectAnswers.map((answer, i) => answers.push(<Answer text={answer} key={"answer"+i}/>));

                return (
                    <div key={quiz.id}>
                        <h5>{quiz.question.text}</h5>
                        {shuffle(answers)}
                        <p className='quizInfo'>
                            <div className='quizInfoInfo'>
                                Category: {formatText(quiz.category)} Difficulty: {quiz.difficulty} <br/>
                                Tags: {quiz.tags.map((tag) => formatText(tag)).join(", ")}
                            </div>
                            <span className='save-quiz'>
                                {isSavable ? (<button onClick={() => {handleSave(quiz)}} className='save-quiz-btn'>Save</button>) : (null)}
                            </span>
                        </p>
                        <hr className='quizSeparator'/>
                    </div>
                )
            })
        }</div>
    )
}

function Answer({text, correct = false}) {
    const [isAnswered, setIsAnswered] = useState(false);
    const handleOnClick = () => {setIsAnswered(true)};

    if (correct) {
        return <Button 
            variant='success' 
            id='correctAnswer'
            onClick={handleOnClick} 
            className={isAnswered ? 'btn-correct-answer' : null}
            >{text}</Button>}

    return <Button 
        variant='danger' 
        id='incorrectAnswer'
        onClick={handleOnClick} 
        className={isAnswered ? 'btn-wrong-answer' : null}
        >{text}</Button>
}

function shuffle(array) {
    var m = array.length, t, i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
  
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}