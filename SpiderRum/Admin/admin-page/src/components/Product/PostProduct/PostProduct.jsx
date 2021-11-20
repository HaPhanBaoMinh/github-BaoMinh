import React, {useState} from 'react';
import { ImgItem } from './ImgItem';
import './Styles.css';


export const PostProduct = () => {

    const [bookData, setBookData] = useState({
        bookName: '',
        bookQuantity: 0,
        bookImages: [],
        bookPrice: {
            oldPrice: 0,
            newPrice: 0
        },
        bookDescription: '',
        booktags: [],
        bookId: '',
        author: ''
    })

    const handleUpdateTags = (index, value) =>{
        const newTag = [...bookData.booktags];
        newTag[index] = value; 
        setBookData({
            booktags: newTag
        })
    }

    return (
        <div className="post-form" >
            <div className="post-form_heder">
                <h3> New product </h3>
            </div>

            <div className="container">
                <div className="post-form_content">
                    <h3 className="details" > Details </h3>
                    <form action="" enctype="multipart/form-data">
                        <div className="post-form_item">
                            <label htmlFor="name"> Book title: </label>
                            <input type="text" id="name" onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookName: e.target.value
                                })
                            }}  />

                           

                        </div>

                        <div className="post-form_item">
                            <label htmlFor="autho"> Author: </label>
                            <input type="text" id="autho"  onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    author: e.target.value
                                })
                            }}  />
                        </div>

                        <div className="post-form_item book-id">
                           <div className="book-id_layout">
                           <label htmlFor="id"> Book ID: </label>
                            <input type="text" id="id" />
                           </div>
                           {/* <button> add image </button> */}
                           <input type="file" id="id" />

                        
                        </div>
                        

                        <div className="post-form_price">
                            <div className="post-form_price-item">
                                <label htmlFor="oldprice"> Old price: </label>
                                <input type="number" id="oldprice"  onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookPrice: {
                                        oldPrice: e.target.value
                                    }
                                })
                            }}  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="newprice"> New price: </label>
                                <input type="number" id="newprice"  onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookPrice: {
                                        newPrice: e.target.value
                                    }
                                })
                            }}  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="newprice"> Quantity: </label>
                                <input type="number" id="quantyti" onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookQuantity: e.target.value
                                })
                            }}  />
                            </div>
                        </div>

                        <div className="post-form_price">
                            <div className="post-form_price-item">
                                <label htmlFor="tag1"> #Tag1: </label>
                                <input type="text" id="tag1" onChange={(e) => {
                                    handleUpdateTags(0, e.target.value);
                                    console.log(bookData.booktags);
                                }} />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="tag2"> #Tag2: </label>
                                <input type="text" id="tag2" onChange={(e) => {
                                    handleUpdateTags(1, e.target.value);
                                    console.log(bookData.booktags);
                                }}  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="tag3"> #Tag3: </label>
                                <input type="text" id="tag3" onChange={(e) => {
                                    handleUpdateTags(2, e.target.value);
                                }}    />
                            </div>
                        </div>
                        <button> post product </button>
                    </form>
                </div>

                <div className="post-form_img">
                    <div className="decription">
                    <h3 className="details" > description </h3>
                    <textarea name="" id="" cols="65" rows="10"  onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookDescription: e.target.value
                                })
                            }}  ></textarea>
                    </div>

                        <h3 className="details" > images </h3>
                    <div className="imgList">
                            <ImgItem />
                            <ImgItem />
                            <ImgItem />
                            <ImgItem />
                            <ImgItem />
                            <ImgItem />
                    </div>

                </div>
            </div>
        </div>
    )
}
