import React, { useEffect } from 'react';
import { Quiz } from '../HandlingAPI/Quiz.js';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const loadJSON = key => key && JSON.parse(sessionStorage.getItem(key));

function SavedPage() {
    let savedQuizzes = loadJSON('savedQuizzes');

    const [curQuizzes, setCurQuizzes] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [quizzesOffset, setQuizzesOffset] = useState(0);
    const quizzesPerPage = 4;

    useEffect(() => {
        if(!savedQuizzes) return
        let endOffset = quizzesOffset + quizzesPerPage;
        
        setCurQuizzes(savedQuizzes.slice(quizzesOffset, endOffset));
        setPageCount(Math.ceil(savedQuizzes.length/quizzesPerPage));
    }, [quizzesOffset, quizzesPerPage])

    const handlePageChange = (event) => {
        const newOffset = (event.selected * quizzesPerPage) % savedQuizzes.length;
        setQuizzesOffset(newOffset);
    };  
    
    if (!curQuizzes) {
        return (
            <>
                <h2>Saves quizzes</h2>
                <p>No saved quizzes</p>
            </>
        )}
    return (
        <>
            <h2>Saves quizzes</h2>
            <Quiz data={curQuizzes} isSavable={false}/>
            <ReactPaginate
                onPageChange={handlePageChange}
                pageCount={pageCount}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                previousLabel={'<'}
                nextLabel={'>'}
                containerClassName={'pageMenu'}
                pageLinkClassName={'page-number'}
                previousLinkClassName={'page-number'}
                nextLinkClassName={'page-number'}
                activeLinkClassName={'active'}/>
        </>
    )
}

export default SavedPage;