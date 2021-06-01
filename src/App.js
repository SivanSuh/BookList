import React from 'react'
import Form from "./Form";
import { BookProvider } from "./BookContext";
import Books from './Books';
import Navbar from "./Navbar";


function App() {
  return (
    <BookProvider>
      <Navbar />
      <div className="text-center  d-flex  justify-content-center align-items-center mt-5">
        <div>
            <div>
                <Books />
            </div>
        </div>
        <div className="mx-5">
            <Form />
        </div>
      </div>
    </BookProvider>
  )
}

export default App
