import React from 'react';
import CartItem from '../components/CartItem';
import NavbarCart from '../components/Header/NavbarCart';
import { useSelector, useDispatch } from 'react-redux';
import { clearDesertFromCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart'
import { Link } from 'react-router-dom';
import empty from '../assets/img/cart/empty.png'

function Cart() {
    const dispatch = useDispatch()
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
    const addedDeserts = Object.keys(items).map(key => {
        return items[key].items[0];
    });
    const onClearCart = () => {
        if (window.confirm('are you sure?')) {
            dispatch(clearDesertFromCart());
        }

    }

    const onRemoveItem = (id) => {
        if (window.confirm('are you sure?')) {
            dispatch(removeCartItem(id));
        }
    }

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id))
    }
    const onMinusItem = (id) => {
        dispatch(minusCartItem(id))
    }

    return (
        <div class="cart">
            <div class="container">
                {
                    totalCount ? <div className="cart-block">
                        <NavbarCart />
                        <div className="cart-header">
                            <div className="cart__title">
                                <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-cart-user-interface-icongeek26-glyph-icongeek26.png" />
                                <h2>Корзина</h2>

                            </div>
                            <button className="cart__empty">
                                <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/50/000000/external-trash-user-interface-kmg-design-glyph-kmg-design.png" />
                                <p onClick={onClearCart}>Очистить корзину</p>
                            </button>
                        </div>
                        <div className="cart-items">
                            {
                                addedDeserts.map(obj => <CartItem
                                    id={obj.id}
                                    name={obj.name}
                                    priceOf={items[obj.id].totalPrice}
                                    numberOf={items[obj.id].items.length}
                                    onRemove={onRemoveItem}
                                    onMinus={onMinusItem}
                                    onPlus={onPlusItem}
                                    img={obj.image}
                                />)
                            }
                        </div>

                        <div className="cart-footer">
                            <div className="cart__count">
                                <div className="cart__deserts">
                                    Всего десертов: {totalCount} шт
                                </div>
                                <div className="cart__price">
                                    Сумма заказа: {totalPrice} грн
                                </div>
                            </div>
                            <div className="cart__buttons">
                                <Link to="/home" >
                                    <button className="cart__back">
                                        <img src="https://img.icons8.com/ios-filled/50/000000/u-turn-to-left.png" />
                                        <p>Вернуться назад</p>
                                    </button>
                                </Link>
                                <button className="cart__pay">
                                    Оплатить покупку
                                </button>
                            </div>
                        </div>
                    </div> : <div className="cart-empty">
                        <NavbarCart />
                        <div className="cart-empty__wrap">
                            <p className="cart-empty__text">КОРЗИНА ПУСТАЯ</p>
                            <img className="cart-empty__img" src={empty}></img>
                            <Link to="/home" className="button cart-empty__back"><span>вернуться назад</span></Link>
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}

export default Cart
