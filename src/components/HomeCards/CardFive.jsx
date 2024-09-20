import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

function CardFive() {
    const [isRotated, setIsRotated] = useState(false);

    const handleMouseEnter = () => setIsRotated(true);
    const handleMouseLeave = () => setIsRotated(false);


    return (
        <>
            {/* <div class="col-auto p-0">
                <div class="card card-1 rounded-5 m-0 d-flex align-items-center gap-4 text-center overflow-hidden bg-transparent">

                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-decoration-none w-100'>
                        <div className="card-part bg-warning w-100 p-3 py-4 fw-bold fs-3 rounded-5 text-primary-emphasis">
                            Download Resume
                        </div>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-decoration-none w-100  ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="card-part bg-light w-100 p-3 py-3 fw-bold fs-3 rounded-5 text-warning d-flex flex-column gap-1 align-items-center">
                            <span>Copy Email</span>
                            <div className={`arrowCircle rounded-pill border border-2 text-primary-emphasis custom-border ${isRotated ? 'arrowRotate' : ''}`}>
                                <FaArrowRightLong size={25} />
                            </div>
                        </div>
                    </a>
                </div>
            </div> */}

            <div class="col-auto p-0">
                <div class="card card-1 rounded-5 m-0 d-flex align-items-center gap-4 text-center overflow-hidden bg-transparent">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-decoration-none w-100'>
                        <div className="card-part bg-warning w-100 p-3 fw-bold fs-3 rounded-5 text-primary-emphasis d-flex justify-content-center align-items-center" style={{height: "100px", width: "100%"}}>
                            Download Resume
                        </div>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-decoration-none w-100  ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="card-part bg-light w-100 p-3 py-2 fw-bold fs-3 rounded-5 text-yellow d-flex flex-column  align-items-center">
                            <span>Copy Email</span>
                            <div className={`arrowCircle rounded-pill border border-2 text-primary-emphasis custom-border ${isRotated ? 'arrowRotate' : ''}`}>
                                <FaArrowRightLong size={25} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </>
    );
}

export default CardFive