import axios from 'axios';
import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM_CART } from '../constants/cartConstants';

export const addItemToCart = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/singleProduct/${id}`, { withCredentials: true });
        
        dispatch({
            type: ADD_TO_CART,
            payload: {
                product: data.product._id,
                projectTitle: data.product.projectTitle,
                description: data.product.description,
                type: data.product.type,
                price: data.product.price,
                images: data.product.images[0]?.url, // Use optional chaining to avoid errors if images array is empty
            }
        });
        
        // Update local storage
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        console.error("Error adding item to cart:", error);
        // Optionally, dispatch an action to handle errors
    }
};

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_CART,
        payload: id
    });

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const clearCart = () => async (dispatch) => {
    dispatch({
        type: CLEAR_CART,
    });

    // Clear local storage
    localStorage.removeItem('cartItems');
};
