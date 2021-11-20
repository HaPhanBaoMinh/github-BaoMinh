import React from 'react';
import "./Styles.css"

export const PostForm = ({srcImg}) => {
    const update = false;
    return (
        <div className="PostForm" >
            <div className="posterImg">
                <img src={srcImg} alt="" height="100%" min-width="100%" />
            </div>
            <div className="postAction">
                <label htmlFor="Link"> Link to: </label>
                <input type="text" id="Link" />
                 <button> Update </button> 
            </div>
        </div>
    )
}
