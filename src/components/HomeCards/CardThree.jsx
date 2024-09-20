import React from 'react'

function CardThree() {
    return (
        <>
           
            <div class="col-auto p-0">
                <div class="card card-1 rounded-5 m-0 overflow-hidden d-flex align-items-center gap-2 p-3 text-center">

                    <div className="circle bg-warning rounded-pill d-flex align-items-center justify-content-center overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1724253367725-bc3c88b8b7e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" alt="..." />
                    </div>
                    <span className='text-dark fw-bold lh-1' style={{fontSize: "24px"}}>"As an aspiring Web Developer, I believe in shaping user experiences with seamless usuability integration"</span>
                </div>
            </div>
        </>
    )
}

export default CardThree