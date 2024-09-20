import React from 'react';
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { RiMediumFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";

function CardTen() {
    return (
        <>
            <div className="col-auto p-0">
                <div className="card card-1 rounded-5 m-0 d-flex align-items-center text-center bg-transparent">
                    <div className="container p-0">
                        <div className="row g-3">
                            <div className="col-6">
                                <div className="bg-light rounded-4 text-white p-4"><GrLinkedinOption color='black' size={50} /></div>
                            </div>
                            <div className="col-6">
                                <div className="bg-light rounded-4 text-white p-4"><FaTwitter color='black' size={50}/></div>
                            </div>

                            <div className="w-100"></div>
                            <div className="col-6">
                                <div className="bg-light rounded-4 text-white p-4"><RiMediumFill color='black' size={50}/></div>
                            </div>
                            <div className="col-6">
                                <div className="bg-light rounded-4 text-white p-4"><IoLogoInstagram color='black' size={50}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardTen;
