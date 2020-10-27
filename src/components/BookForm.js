import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

function BookForm() {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: { title, author } })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='book title'
                required />
            <input onChange={(e) => setAuthor(e.target.value)} value={author} type='text' placeholder='author'
                required />
            <input type='submit' value='add book' />
        </form>
    )
}

export default BookForm
