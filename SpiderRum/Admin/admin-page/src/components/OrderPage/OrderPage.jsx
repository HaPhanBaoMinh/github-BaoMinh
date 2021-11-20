import React from 'react';
import "./Styles.css"
import { BsSearch } from "react-icons/bs";
import Table from './Table/Table';


export const OrderPage = () => {
    return (
        <>
            <div className="oderList">
                <div className="searchBar">
                    <input type="text" placeholder="Find by name" />
                    <BsSearch className="icon" />
                </div>
                <div className="choceTable">
                    <div className="link-item" > 
                            <h3> Orders list </h3>
                    </div> 

                </div>
                        <Table check= {true} />
               
            </div>
        </>
    )
}

export default OrderPage
