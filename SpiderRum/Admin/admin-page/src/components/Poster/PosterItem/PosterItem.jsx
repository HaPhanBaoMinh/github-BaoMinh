import React from 'react';
import "./Styles.css";
import { BsXCircle } from "react-icons/bs";


const PosterItem = ({srcImg}) => {
    return (
        <>
            <div className="PosterItem" >
                <button>  <BsXCircle /> </button>
                <img src={srcImg} alt="" height="100%" width="100%"  />
                <img src={srcImg} alt="" height="100%" width="100%"  />
            </div>
        </>
    )
}

export default PosterItem;