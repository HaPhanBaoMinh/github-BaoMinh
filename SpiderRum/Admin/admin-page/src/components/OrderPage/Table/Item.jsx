import React from 'react';
import "./Styles.css";

export const Item = ({check, status}) => {
    return (
        <>
            <tr className="tr">
                    <td className="td" >1</td>
                    <td className="td" >11/16/2021</td>
                    <td className="td" >Hà Phan Bảo Minh</td>
                    <td className="td" >0912782832</td>
                    <td className="td" >2</td>
                    <td className="td" >190,000đ</td>

                    {
                        check == true ?
                        <td className="td" >
                            <button className="button confirm" >Confirm</button>
                            <button className="button cancel" >Cancel</button>
                        </td> : <> </>
                    }

                    {
                        status == true ?
                        <td className="td">
                           <h2> Pending </h2>
                        </td> :  <>  </>

                    }
                    
                </tr>
        </>
    )
}
