import React, { useEffect, useState } from 'react';
import '../Main/Main.css';
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
                        <h2>{trivia.question.text}</h2>
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
    const [isAnswerd, setIsAswerd] = useState(false);

    const handleOnClick = () => {
        setIsAswerd(true);
        console.log(isAnswerd);
    }

    if (correct) {
        return <Button 
            variant='success' 
            id='correctAnswer'
            onClick={() => {handleOnClick()}} 
            style={{
                backgroundColor: isAnswerd ? '#006f00' : '',
                borderColor: isAnswerd ? '#00bb00' : '',
              }}><i>{text}</i></Button>}
    return <Button 
        variant='danger' 
        id='incorrectAnswer'
        onClick={() => {handleOnClick()}} 
        style={{
            backgroundColor: isAnswerd ? '#6f0000' : '',
            color: isAnswerd ? '#bb0000' : '',
          }}>{text}</Button>
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