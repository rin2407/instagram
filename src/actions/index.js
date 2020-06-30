import * as TYPES from '../constants/ActionTypes'
export const actFetchProduct=(products)=>{
    return{
        type: TYPES.FETCH_PRODUCTS,
        products
    }
}