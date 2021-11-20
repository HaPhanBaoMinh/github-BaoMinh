import React from 'react';
import { Item } from './Item';
import "./Styles.css"

export const Table = ({check, status}) => {
    return (
        
        <table className="table-list">
            <thead>
                <th className="header">#</th>
                <th className="header">Order Date</th>
                <th className="header">Custemer</th>
                <th className="header">Phone Number</th>
                <th className="header">Items</th>
                <th className="header">Total</th>
                {check == true ? <th className="header check">Check</th> : <> </> }
                {status == true ? <th className="header check">status</th> : <> </> }
                
            </thead>

            <tbody>
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
            <Item check={check} status={status} />
               
            </tbody>
        </table>
    )
}

export default Table;
