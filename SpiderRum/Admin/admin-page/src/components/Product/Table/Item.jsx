import React from 'react';
import "./Styles.css";
import { Link } from 'react-router-dom';
import formatCash from '../../../function/formatMoney';
import { deleteBook } from '../../../actions/BookList';
import {useDispatch} from "react-redux";
import axios from 'axios';

export const Item = ({book, count}) => {
    const dispatch = useDispatch();

    const onClickDeleteBook = (e) => {
        dispatch(deleteBook(book._id));
        axios.delete('http://localhost:5000/api/booksList', { data: {
            id: book._id
        }, header: {} });
    }




    return (
        <tr className="tr">
                 <Link to="/newproduct" className='linkItem' >
                    <td className="td" >{count} </td>
                    <td className="td " >
                            <img src="https://product.hstatic.net/200000123069/product/proposal_ntmnst_1706a93213ea40e397be5bbdaced5977_master.png" height="110px" alt="" />
                       
                    </td>
                    <td className="td book-name" > {book.bookName} </td>
                    <td className="td" > {book.bookId} </td>
                    <td className="td" > {formatCash(book.bookPrice.newPrice)}đ</td>
                    <td className="td" > <p> {book.bookQuantity} </p> </td>

                    </Link>
                    <td className="td" >
                            <button className="button cancel" onClick={() => onClickDeleteBook()} >Delete</button>
                    </td>
                </tr>
    )
}
