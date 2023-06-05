import React from 'react';
import { Answer } from './Answer.js';

export function Trivia({data}) {
    return (<div>
            <h2>{data.question.text}</h2>
            <span>Categorie: {data.category}</span>
            <span>Difficulty: {data.difficulty}</span><br/>
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