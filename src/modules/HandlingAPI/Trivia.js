import React from 'react';
import '../Main/Main.css';
import { Button } from 'react-bootstrap';
import { formatText } from './handleAPI';

export function Trivia({data}) {
    return (
        <div className='quizPost'>{
            data.map((trivia) => {
                return (
                    <div key={trivia.id}>
                        <h2>{trivia.question.text}</h2>
                        <Answers incorrectAnswers={trivia.incorrectAnswers} correctAnswer={trivia.correctAnswer}/>
                        <p className='quizInfo'>
                            Category: {formatText(trivia.category)} Difficulty: {trivia.difficulty} <br/>
                            Tags: {trivia.tags.map((tag) => formatText(tag)).join(", ")}
                        </p>
                        <hr className='quizSeparator'/>
                    </div>
                )
            })
        }</div>
    )
    
}

function Answers({correctAnswer, incorrectAnswers}) {
    let answers = [<Answer text={correctAnswer} correct={true}/>];
    incorrectAnswers.map((answer) => answers.push(<Answer text={answer}/>));

    return (
        <>
            {shuffle(answers)}
        </>)
    
}

function Answer({text, correct = false}) {
    if (correct) return <Button variant='success' id='correctAnswer'><i>{text}</i></Button> 
    return <Button variant='danger' id='incorrectAnswer'>{text}</Button>
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