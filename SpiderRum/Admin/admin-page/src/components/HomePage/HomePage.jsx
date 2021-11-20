import React from 'react';
import "./Styles.css"
import { BsCreditCardFill } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import Chart from '../Chart/Chart';
import CalendarCom from '../Calendar/Calendar';
import SmallOrderItem from '../OrderList/SmallOrderItem/SmallOrderItem';

const HomePage = () => {

    return (
        <>
            <div className="Revenue">
                <div className="topSection">

                    <div className="revenueToday">
                        <div className="revenueToday_Icon">
                            <BsCreditCardFill />
                        </div>
                        <div className="revenueToday_content">
                            <h3> Today Revenue </h3>
                            <h2> 190,000đ </h2>
                        </div>
                    </div>

                    <div className="revenueToday">
                        <div className="revenueToday_Icon">
                            <BsCartFill />
                        </div>
                        <div className="revenueToday_content">
                            <h3> New Orders </h3>
                            <h2> 10 </h2>
                        </div>
                    </div>

                </div>

                <div className="revenueMonth">
                            <div className="revenueMonth_Icon">
                                {/* <BsCartFill /> */}
                                <h5> Welcome to spiderrum admin store ! </h5>
                            </div>
                            <div className="revenueMonth_content">
                                <h2>  </h2>
                            </div>
                
                </div>
                

                <div className="Chart">
                    <Chart />
                </div>

                
                </div>

            <div className="Order">
                <div className="OrderList">
                    <CalendarCom />
                    <div className="pendingOrder">
                        <div className="logo" > 
                            <img src="https://product.hstatic.net/1000405368/product/giaohangtk_c57f4d8ab326411c9a42d9dcde1604f7.png" height="125px" />
                        </div>
                        <div className="pendingOrder_list">
                            <SmallOrderItem />
                            <SmallOrderItem />
                            <SmallOrderItem />
                         
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage


// rgb(195 236 255)
// #03a9f4;