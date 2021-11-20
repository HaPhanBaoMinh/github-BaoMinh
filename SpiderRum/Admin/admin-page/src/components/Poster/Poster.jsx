import React from 'react'
import "./Styles.css";
import { DemoPoster } from './DemoPosrter/DemoPoster';
import  PosterItem  from './PosterItem/PosterItem';
import {PostForm} from "./PostForm/PostForm";
import { BiCaretRight } from "react-icons/bi";
import { BiCaretLeft } from "react-icons/bi";

const demoImg = [
    'https://file.hstatic.net/200000123069/file/seneca-banner-shop-spiderum_7250b3e14e1a4c53a949902a0eb3a1cd.jpg',
    'https://file.hstatic.net/200000123069/file/spiderum-store-banner_57a17c456b49418784aea1dce097df8e.jpg',

]

export const Poster = () => {
    return (
       <>
            <div className="PosterLayout">
                <DemoPoster srcImg={demoImg[1]} />
                <PostForm srcImg={demoImg[1]} />
            </div>

            <div className="PosterList">
                <PosterItem srcImg={demoImg[0]} />
                <PosterItem srcImg={demoImg[1]} />
                <PosterItem srcImg={demoImg[0]} />
                <PosterItem srcImg={demoImg[1]} />
                <PosterItem srcImg={demoImg[0]} />
                
            </div>
       </>
    )
}

