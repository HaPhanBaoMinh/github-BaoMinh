import React from 'react';
import "./Styles.css";

export const SmallOrderItem = () => {
    return (
        <div className="OrderItem">
            <div className="OrderItemInfo">
                <h5> Hà Phan Bảo Minh </h5>
                <h6> Date: 15/11/2021 </h6>
            </div>
            <h4 className="OrderItemTotal" > Delivery: 11/06/2021 - 14h30 </h4>
        </div>
    )
}

export default SmallOrderItem;