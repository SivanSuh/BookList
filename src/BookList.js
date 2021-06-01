import React from 'react'

function BookList({ name, price }) {
    return (
        <div className="border border-warning border border-3 my-2 p-2 rounded ">
            <h3>Kitap Adı : {name}</h3>
            <p>Kitap Ucreti : {price}</p>
        </div>
    )
}

export default BookList
