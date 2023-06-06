import React, { useState } from 'react';
import { Trivia } from '../HandlingAPI/Trivia';
import { Fetch } from '../HandlingAPI/handleAPI';

function RandomPage() { 
    let url = "https://the-trivia-api.com/v2/questions?" + new URLSearchParams({limit: "1"});

    return (
        <div>
            <h1>Quiz</h1>
            <Fetch url={url} renderOnSuccess={Trivia}/>
        </div>
    )
}

export default RandomPage;