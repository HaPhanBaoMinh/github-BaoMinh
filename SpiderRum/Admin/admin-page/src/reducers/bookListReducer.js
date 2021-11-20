const reducer = (bookList=[], action) => {

    switch (action.type) {

        case "GET_BOOKLIST":
            console.log(action.payload);
            return action.payload;
            break;

            case "DELETE_BOOK":
                // console.log(action.payload);
            return bookList.filter(book => book._id != action.payload)
            break;
    
        default:
            return []
            break;
    }
}

export default reducer;