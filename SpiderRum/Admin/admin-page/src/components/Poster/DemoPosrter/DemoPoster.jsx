import React from 'react';
import "./Styles.css";
import SimpleImageSlider from "react-simple-image-slider";

const demoImg = [
    {url: 'https://file.hstatic.net/200000123069/file/spiderum-store-banner_57a17c456b49418784aea1dce097df8e.jpg'},
    { url:'https://file.hstatic.net/200000123069/file/seneca-banner-shop-spiderum_7250b3e14e1a4c53a949902a0eb3a1cd.jpg'},
    {url: 'https://file.hstatic.net/200000123069/file/spiderum-store-banner_57a17c456b49418784aea1dce097df8e.jpg'},
]

export const DemoPoster = () => {
    

    return (
        <>
            <div className="DemoPoster" >
                <SimpleImageSlider
                    style={{position: 'relative', borderRadius: "10px"}}
                    width={600}
                    height={365}
                    images={demoImg}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    showNavs={false}
                />
            </div>
        </>
    )
}
