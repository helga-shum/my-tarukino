import filters from './filters'
import { combineReducers } from 'redux'
import deserts from './deserts';
import cart from './cart';

const rootReducer = combineReducers({
    filters,
    deserts,
    cart
})

export default rootReducer