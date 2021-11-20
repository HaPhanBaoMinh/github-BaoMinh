import axios from "axios";
import { getBookListAction } from "../actions/BookList";
import {useDispatch} from 'react-redux';


const GetBookList = async () => {
    const dispatch = useDispatch();
    axios.get('http://localhost:5000/api/booksList')
    .then(({data}) => {
        dispatch(getBookListAction(data));
    })
};

export {GetBookList};