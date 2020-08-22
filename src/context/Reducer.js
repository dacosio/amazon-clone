export const initialState = {
    basket: [],
    users: null
}

export const getBasketTotal = basket => basket?.reduce((amount, item) => item.price + amount, 0)

function reducer(state,action) {
    console.log(action)
    
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            
            //if it is not existing findIndex will return -1. If found it will return the index
            if(index >= 0) {
                //item exists in basket, remove it..
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id} as its not existing)`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
            break;
        default:
            return state;
    }
}

export default reducer;