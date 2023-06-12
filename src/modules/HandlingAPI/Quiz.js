import React, { useEffect, useState } from 'react';
import '../css/Main.css';
import '../css/Quiz.css';
import { Button } from 'react-bootstrap';
import { formatText } from './handleAPI';

export function Quiz({data}) {
    return (
        <div className='quizPost'>{
            data.map((quiz) => {
                let answers = [<Answer text={quiz.correctAnswer} correct={true}/>];
                quiz.incorrectAnswers.map((answer) => answers.push(<Answer text={answer}/>));
                answers = shuffle(answers);

                return (
                    <div key={quiz.id}>
                        <h5>{quiz.question.text}</h5>
                        {answers}
                        <p className='quizInfo'>
                            <div className='quizInfoInfo'>
                                Category: {formatText(quiz.category)} Difficulty: {quiz.difficulty} <br/>
                                Tags: {quiz.tags.map((tag) => formatText(tag)).join(", ")}
                            </div>
                            <span className='save-quiz'>
                                <button className='save-quiz-btn'>Save</button>   
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
            ><i>{text}</i></Button>}
            
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