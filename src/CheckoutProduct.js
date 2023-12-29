import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <FlipMove typeName="div" enterAnimation="elevato" leaveAnimation="accordionVertical">
            <div className='checkoutProduct' key={id}>
                <img className='checkoutProduct__image' src={image} alt="" />

                <div className='checkoutProduct__info'>
                    <p className='checkoutProduct__title'>{title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <p className="checkoutProduct__rating">
                        {Array(rating).fill().map((i, _) => (
                            <p key={i}>⭐</p>
                        ))}
                    </p>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>
        </FlipMove>
    );
}

export default CheckoutProduct;
