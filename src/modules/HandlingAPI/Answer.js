import React from 'react';
import '../Main/Main.css';
import { Button } from 'react-bootstrap';

export function Answer({text, correct = false}) {
    if (correct) return <Button variant='success' id='correctAnswer'><i>{text}</i></Button> 
    return <Button variant='danger' id='incorrectAnswer'>{text}</Button>
}