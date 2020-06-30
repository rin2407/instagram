import * as TYPES from '../../constants/ActionTypes'
const productInitialState = []
const ProductReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_PRODUCTS:
            state=action.products;
            return [...state]
        default:
            return state
    }
}
export default ProductReducer