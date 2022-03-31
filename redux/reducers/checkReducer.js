import Add_Wishlist from '../constants';
const initialState = {
    wishlist: []

};

export const changeReducer = (state = initialState, action) => {


    console.log(state.wishlist)
    console.log(action.payload)
    switch (action.type) {

        case Add_Wishlist:
            return {
                ...state,
                //  wishlist: 
                wishlist: action.payload
            }

        default:
            return state;
    }
}
