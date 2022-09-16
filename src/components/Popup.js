import React from 'react';
import { ImCancelCircle } from "react-icons/im";

const Popup = ({ visible, onClose, imgSrc, title, type, year }) => {
    if (!visible) return null;

    return (
        <div className="popup">
            <div className='modal-content'>
                <div className='modal-text'>
                    <h1 className='popup_h1'>{title}</h1>
                    <p >RELEASE YEAR : {year}</p>
                    <p >TYPE : {type}</p>

                    <button className='close-modal' onClick={onClose} >
                        <ImCancelCircle size={35} />
                    </button>
                </div>
                <img className="popupmovie__img" src={imgSrc} alt="movieimg" />

            </div>
        </div>

    )
}

export default Popup;