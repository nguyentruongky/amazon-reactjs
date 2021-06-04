import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ title, image, price, rating }) {
    const [state, dispatch] = useStateValue()
    console.log('Basket', state)
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: 10,
                title,
                price,
                image,
                rating,
            },
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
