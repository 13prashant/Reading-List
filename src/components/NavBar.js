import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function NavBar() {
    const { books } = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Prashant's Reading List</h1>
            <p>Currently you have {books.length} {books.length === 1 ? 'book' : 'books'} to get through...</p>
        </div>
    )
}

export default NavBar
