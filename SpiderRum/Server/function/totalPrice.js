const booksList = require("../Models/Store/booksModels");

const totalPrice = async (cart) => {
    let totalPrice = 0;
    const productData = await booksList.find();
    await productData.map(dataItem => {
        cart.map(cartItem => {
            if(dataItem.bookId == cartItem.bookId){
                totalPrice += (dataItem.bookPrice.newPrice)*(cartItem.count);
            }
        })
    })
    // console.log(totalPrice);
    return totalPrice
}

module.exports = totalPrice;