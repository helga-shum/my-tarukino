import React from 'react'


function CartItem({ id, name, numberOf, priceOf, onRemove, onMinus, onPlus, img }) {
    const handleRemoveClick = () => {
        onRemove(id)
    }
    const handleMinusItem = () => {
        onMinus(id)
    }
    const handlePlusItem = () => {
        onPlus(id)
    }
    return (
        <div className="cart-item">

            <div className="cart-wrap">

                <div className="cart-img">
                    <img src={img} alt="cart" />
                </div>
                <div className="cart-item__text">
                    {name}
                </div>
                <div className="cart-item__number">
                    <button onClick={handleMinusItem} className="cart-item__btn">
                        <img src="https://img.icons8.com/material/30/000000/minus--v2.png" alt="minus" />
                    </button>
                    <p>{numberOf}</p>
                    <button onClick={handlePlusItem} className="cart-item__btn">
                        <img src="https://img.icons8.com/android/30/000000/plus.png" alt="plus" />
                    </button>

                </div>
                <div className="cart-item__price">
                    {priceOf}
                </div>
                <button onClick={handleRemoveClick} className="cart-item__btn">
                    <img src="https://img.icons8.com/emoji/30/000000/cross-mark-emoji.png" alt="cross" />
                </button>

            </div>

        </div >


    )
}

export default CartItem

