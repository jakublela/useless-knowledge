import React from 'react';
import '../Main/Main.css';
import { Button } from 'react-bootstrap';

export function Trivia({data}) {
    return (
        <>{
            data.map((trivia) => {
                return (
                    <div key={trivia.id}>
                        <h2>{trivia.question.text}</h2>
                        <div className='quizInfo'>
                            <p className='span'>Category: {trivia.category} Difficulty: {trivia.difficulty}</p>
                        </div>
                        <Answers incorrectAnswers={trivia.incorrectAnswers} correctAnswer={trivia.correctAnswer}/>
                    </div>
                )
            })
        }</>
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

function Answer({text, correct = false}) {
    if (correct) return <Button variant='success' id='correctAnswer'><i>{text}</i></Button> 
    return <Button variant='danger' className='incorrectAnswer'>{text}</Button>
}