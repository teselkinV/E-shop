import React from 'react';
import '../../App.css';

export default function CartItem({item, value}) {
    const {id, title, img, size, price, total, count, sign} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className='container'>
            <div className='row my-2'>
                <div className='col-4 mx-auto col-lg-2 col-md-4' >
                    <img src={img} className='image-fluid cart-img' alt='product'/>
                </div>
                <div className='col-8 col-lg-10 col-md-8 cart-content'>
                <div className='d-flex-column'>
                    <div className='col-6 col-lg-2 col-md-5 cart-title-product'>{title}</div>
                    <div className='col-6 col-lg-2 col-md-5 id-product'>{sign}</div>
                </div>
                <div className='col-6  m-1 col-lg-2 col-md-5 cart-size text-center'>{size}</div>
                <div className='col-6 m-1 col-lg-2 col-md-5 my-2 my-lg-0'>
                    <div className='d-flex justify-content-center quintity text-center'>
                        <div><span className='btn btn-black mx-1 change-count' onClick={() => decrement(id)}>-</span></div>
                        <div><span className='btn  mx-1 py-auto count-cart'>{count}</span></div>
                        <div><span className='btn btn-black mx-1 change-count' onClick={() => increment(id)}>+</span></div>
                    </div>
                </div>
                <div className='col-6 m-1 col-lg-2 col-md-5 cart-price'>${price}</div>
               
                    <div className='col-6 m-1 col-lg-2 col-md-5 cart-remove' onClick={() => removeItem(id)}>Delete

                </div>
                </div>
            </div>
        </div>
    )
}

