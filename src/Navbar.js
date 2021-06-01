import React, { useState, useContext } from 'react'
import { BookContext } from "./BookContext";

function Navbar() {
    const [ book, setBook] = useContext(BookContext);
    return (
        <div className="container-fluid bg-warning bg-gradient d-flex justify-content-around align-items-center py-2">
            <h1>Kitap Listesi</h1>
            <p className="text-white">Kitap Sayısı : {book.length} </p>
        </div>
    )
}

export default Navbar
