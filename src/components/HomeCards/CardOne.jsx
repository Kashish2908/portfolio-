import React from 'react'

function CardOne() {
    return (
        <>
            <div class="col-auto p-0">
                <div class="card rounded-5 m-0 overflow-hidden d-flex align-items-center p-3 text-center">

                    <div className="circle  rounded-pill ">
                        <img src="https://images.unsplash.com/photo-1724253367725-bc3c88b8b7e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" alt="..." />
                    </div>

                    <span className='text-dark fs-4 my-3 fw-bold lh-1'>This Two-Cents Mantra Works Every-Time</span>

                    <span className='text-yellow fw-bold mt-2 fs-4'>Iterate  • Imporve  • Repeat</span>
                </div>
            </div>
        </>
    )
}

export default CardOne