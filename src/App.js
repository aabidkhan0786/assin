import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getPosts } from "./actions/posts";
import Form from './Components/Form/Form';
import Posts from './Components/Posts/Posts';

const App = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])
    return (
        <>

        <Posts setCurrentId={setCurrentId} />
            <Form currentId={currentId} setCurrentId={setCurrentId} />
        </>
    )
}

export default App
