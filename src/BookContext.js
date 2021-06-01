import React , { createContext ,useState } from "react";

export const BookContext = createContext();

export const BookProvider = props =>{
    const  [ book, setBook] = useState([
        {name : "kırmızılı" , price:"15 TL", ID : 1},
        {name : "savascı" , price:"45 TL ", ID : 2},
        {name : "atlar" , price:"60 TL ", ID : 3},
    ])

    return(
        <BookContext.Provider value={[book ,setBook]}>{props.children}</BookContext.Provider>
    )
}
