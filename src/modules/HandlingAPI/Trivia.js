import React, { useEffect, useState } from 'react';
import '../css/Main.css';
import '../css/trivia.css';
import { Button } from 'react-bootstrap';
import { formatText } from './handleAPI';

const loadJSON = key => key && JSON.parse(sessionStorage.getItem(key));
const saveJSON = (key, data) => sessionStorage.setItem(key, JSON.stringify(data));

export function Trivia({data, isSavable = true}) {
    const [isSaved, setIsSaved] = useState(['Save', 'Save', 'Save', 'Save']);

    useEffect(() => {
        let saveButton = isSaved;
        saveButton[i] = 'Saved'
        setIsSaved(saveButton);
        console.log(saveButton);
    }, [saveButton])
    
    return (
        <div className='quizPost'>{
            data.map((trivia) => {
                <Quiz trivia={trivia} isSavable={isSavable}/>
            })
        }</div>
    )
    
}

function Quiz(trivia, isSavable) {
    let answers = [<Answer text={trivia.correctAnswer} correct={true} key={"correctAnswer"}/>];
    trivia.incorrectAnswers.map((answer, i) => answers.push(<Answer text={answer} key={"answer"+i}/>));

    return (
        <div key={trivia.id}>
            <h5>{trivia.question.text}</h5>
            {shuffle(answers)}
            <p className='quizInfo'>
                Category: {formatText(trivia.category)} Difficulty: {trivia.difficulty} <br/>
                Tags: {trivia.tags.map((tag) => formatText(tag)).join(", ")}
            </p>
            {isSavable ? (<Button onClick={() => {handleOnClick(trivia, i)}}>{isSaved[i]}</Button>) : (null)}
            <hr className='quizSeparator'/>
        </div>
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