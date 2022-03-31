import Add_Wishlist
    from '../constants';

const changeWishlist = (value) => {
    // console.log(value)

    return {
        type: Add_Wishlist,
        payload: value
    }
}



export default changeWishlist;
