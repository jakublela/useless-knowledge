import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Button } from 'react-bootstrap';
import '../Main/Main.css';
import { Tags } from '../pages/Tags/Tags';

function useFetch(url, next = true) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        if(!url) return
        fetch(url)
            .then(res => res.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [next, url]);

    return { data, loading, error };
}

export function FetchTrivia({url, renderOnSuccess,
    renderOnLoading = <h1>loading...</h1>,
    renderOnFail = error => (<pre>{JSON.stringify(error, null, 2)}</pre>)}) {
    const [next, setNext] = useState(false);
    const {data, loading, error} = useFetch(url, next);

    if (loading) return renderOnLoading;
    if (error) return renderOnFail(error);
    if (data) return (
        <>
            {renderOnSuccess({data})}
            <Button className='nextQuiz' onClick={() => {setNext(!next)}}>Next Quiz Set</Button>
        </>
        );
}

export function FetchTags({url,
    renderOnLoading = <h1>loading...</h1>,
    renderOnFail = error => (<pre>{JSON.stringify(error, null, 2)}</pre>)}) {
    const {data, loading, error} = useFetch(url);
    
    const [curTags, setCurTags] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [tagsOffset, setTagsOffset] = useState(0);
    const tagsPerPage = 100;
    
    useEffect(() => {
        if(!data) return
        let endOffset = tagsOffset + tagsPerPage;
        setCurTags(Object.keys(data).slice(tagsOffset, endOffset));
        setPageCount(Math.ceil(Object.keys(data).length/tagsPerPage));
    }, [tagsOffset, tagsPerPage, data])

    const handlePageChange = (event) => {
        const newOffset = (event.selected * tagsPerPage) % Object.keys(data).length;
        setTagsOffset(newOffset);
    };  

    if (loading || !curTags) return renderOnLoading;
    if (error) return renderOnFail(error);
    if (data) return (
        <>
            <Tags tags={curTags}/>
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
        );
}

export function formatText(text) {return text.charAt(0).toUpperCase() + text.replaceAll("_", " ").slice(1)}