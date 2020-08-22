import React from 'react'
import {useStateValue} from '../context/StateProvider'
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                { basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty.</h2>
                    </div>
                ): (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* List out all of the checkout products */}
                        {basket.map(item=> (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
            
        </div>
    )
}

export default Checkout
