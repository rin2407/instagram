const HoverInitialState = {
    status: false
}
 const HoverStatusReducer = (state = HoverInitialState, action) => {
     switch (action.type) {
        case 'HOVER':
            return {...state,status:!state.status}
        default:
            return state
     }
 }
 export default HoverStatusReducer;