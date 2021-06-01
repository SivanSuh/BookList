import React, { useContext, useState } from "react";
import { BookContext } from "./BookContext";

const Form = () =>{

    const [ name , setName] = useState("");
    const [ price, setPrice] = useState("");
    const [book, setBook] = useContext(BookContext);

    const SaveBook = (e) =>{
        e.preventDefault();
        setBook((data) => [...data, { name : name , price: price + " TL " }]);
        setName("");
        setPrice("");
    }

    return(
        <form onSubmit={SaveBook} className="d-flex flex-column border border-success p-5 rounded border border-4">
            <input className="p-2" type="text" value={name} placeholder="enter book name" onChange={(e) => setName(e.target.value)} />
            <input className="my-2 p-2" value={price} type="text" placeholder="enter price name"onChange={(e) => setPrice(e.target.value)} />
            <button className="p-2" disabled={!name} disabled={!price}>Kaydet</button>
        </form>
    )
}
export default Form;