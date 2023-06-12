import React, { useEffect, useState } from 'react';
import '../css/Main.css';
import '../css/trivia.css';
import { Button } from 'react-bootstrap';
import { formatText } from './handleAPI';

export function Trivia({data}) {
    return (
        <div className='quizPost'>{
            data.map((trivia) => {
                let answers = [<Answer text={trivia.correctAnswer} correct={true}/>];
                trivia.incorrectAnswers.map((answer) => answers.push(<Answer text={answer}/>));
                answers = shuffle(answers);

                return (
                    <div key={trivia.id}>
                        <h5>{trivia.question.text}</h5>
                        {answers}
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