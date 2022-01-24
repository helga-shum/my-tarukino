export const addDesertToCart = (desertObj) => ({
    type: 'ADD_DESERT_CART',
    payload: desertObj
});

export const clearDesertFromCart = () => ({
    type: 'CLEAR_DESERT_CART'

});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id

})
export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id

})
export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id

})