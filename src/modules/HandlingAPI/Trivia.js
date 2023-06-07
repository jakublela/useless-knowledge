import React from 'react';
import { Answer } from './Answer.js';
import '../Main/Main.css';

export function Trivia({data}) {
    return (<div>
                <h2>{data.question.text}</h2>
                <div className='quizInfo'>
                    <span className='span'>Category: {data.category}</span>
                    <span className='span'>Difficulty: {data.difficulty}</span>
                </div>
                <Answers incorrectAnswers={data.incorrectAnswers} correctAnswer={data.correctAnswer}/>
            </div>)
}

function Answers({correctAnswer, incorrectAnswers}) {
    let answers = [<Answer text={correctAnswer} correct={true}/>];
    incorrectAnswers.map((answer) => answers.push(<Answer text={answer}/>));

    return (
        <>
            {shuffle(answers)}
        </>)
    
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