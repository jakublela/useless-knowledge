import React from 'react';
import { Button } from 'react-bootstrap';

export function Answer({text, correct = false}) {
    if (correct) return <Button variant='success' id='corrertAnswer'><i>{text}</i></Button> 
    return <Button variant='danger'>{text}</Button>
}