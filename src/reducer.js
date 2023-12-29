export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => basket?.reduce((prev, curr) => prev + curr.price, 0)


const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const updatedBasket = [...state.basket];
            const index = state.basket.findIndex(item => item.id === action.id);
            if (index >= 0) {
                updatedBasket.splice(index, 1); // Remove the item from the basket array
            }
            return {
                ...state,
                basket: updatedBasket
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer