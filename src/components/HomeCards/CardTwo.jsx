import React, { useEffect, useState } from 'react'

function CardTwo() {

    const [currentWord, setCurrentWord] = useState("Hello");

    useEffect(() => {

        if (currentWord === "Hello") {
            setTimeout(() => {
                setCurrentWord("Hola")
            }, 1000)
        } else if (currentWord === "Hola") {
            setTimeout(() => {
                setCurrentWord("Bonjour")
            }, 1000)
        } else if (currentWord === "Bonjour") {
            setTimeout(() => {
                setCurrentWord("नमस्ते")
            }, 1000)
        }else if (currentWord === "नमस्ते") {
            setTimeout(() => {
                setCurrentWord("Hello")
            }, 1000)
        }
    }, [currentWord])


    return (
        <>
            <div className="col-auto p-0">
                <div className="card card-1 rounded-5 overflow-hidden p-2 py-3 m-0">
                    <span className='text-dark fw-bold fs-3 fst-italic ms-2'>{currentWord}!</span>
                    <div className='my-3 d-flex align-items-center gap-3'>
                        <div className="circle border-secondary shadow-lg rounded-pill d-flex align-items-center justify-content-center overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1603621760091-d7b12c66549a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" alt="..." />
                        </div>

                        <div className="name text-dark fw-bold">
                            <div className='fs-5'>I'm Kashish Neekhra 👋</div>
                            <div className='fst-italic'>from India</div>
                        </div>

                    </div>
                    <div className="badge rounded-pill text-bg-success w-75 mx-auto mt-2 w-auto d-flex align-items-center gap-1 bg-success-subtle border border-1 border-success">
                        <span className='fs-5 text-success'>•</span>
                        <span className='text-success'>Available for remote opportunities</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTwo

