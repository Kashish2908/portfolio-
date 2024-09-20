import React, {useState} from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';


function CardSeven() {
    const [isRotated, setIsRotated] = useState(false);

    const handleMouseEnter = () => setIsRotated(true);
    const handleMouseLeave = () => setIsRotated(false);

    return (
        <div className="col-auto p-0">
            <div className="card card-1 rounded-5 m-0 overflow-hidden d-flex align-items-center justify-content-center gap-3 p-3 text-center bg-light" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <div className='fw-bold fs-3 text-yellow'>
                    About Me
                </div>
                <div className={`arrowCircle rounded-pill border border-2 custom-border ${isRotated ? 'arrowRotate' : ''}`}>
                    <FaArrowRightLong size={25} />
                </div>
            </div>
        </div>
    );
}

export default CardSeven