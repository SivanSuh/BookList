import React, { useState, useContext } from 'react'
import { BookContext } from "./BookContext";
import BookList from "./BookList";

function Books() {
    const [book, setBook] = useContext(BookContext);
    return (
        <div>
            { book.map((item) => <BookList key={item.id} name={item.name} price={item.price} />)}
        </div>
    )
}

export default Books;
