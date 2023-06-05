import React, { useState } from 'react';
import { Trivia } from '../HandlingAPI/Trivia';
import { Fetch } from '../HandlingAPI/handleAPI';

function RandomPage() { 
    let url = "https://the-trivia-api.com/v2/questions?" + new URLSearchParams({limit: "1"});

    return (
        <>
         <h1>Random questions</h1>
         <Fetch url={url} renderOnSuccess={Trivia}/>
        </>
    )                                                                                  
}

export default RandomPage;