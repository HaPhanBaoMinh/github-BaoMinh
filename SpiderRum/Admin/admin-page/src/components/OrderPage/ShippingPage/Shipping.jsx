import React from 'react';
import "../Styles.css"
import { BsSearch } from "react-icons/bs";
import Table from '../Table/Table';


export const Shipping = () => {
    return (
        <>
            <div className="oderList">
                <div className="searchBar">
                    <input type="text" placeholder="Find by name" />
                    <BsSearch className="icon-search" />
                </div>
                <div className="choceTable">
                    <div className="link-item" > 
                            <h3> shipping </h3>
                            {/* <h3> Ship fee: 140.000đ</h3> */}
                    </div> 

                </div>
                
                    
                       <Table status= {true} check={false} />
                   
               
            </div>
        </>
    )
}

export default Shipping
