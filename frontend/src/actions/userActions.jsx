// import axios from '../axiosConfig'
import axios from 'axios'
import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,

    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,

    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL,

    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,

    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_RESET,
    UPDATE_USER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    SOFTDELETE_USER_REQUEST, 
    SOFTDELETE_USER_SUCCESS ,
    SOFTDELETE_USER_RESET,
    SOFTDELETE_USER_FAIL,
    
    RESTORE_USER_REQUEST,
    RESTORE_USER_SUCCESS,
    RESTORE_USER_RESET,
    RESTORE_USER_FAIL,

    CLEAR_ERRORS,

} from '../constants/userConstants'

export const RegisterUser = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_USER_REQUEST
        })
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        }
        const { data } = await axios.post(`${import.meta.env.VITE_APP_API}/api/v1/register`, userData, config);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// export const LoginUsers = (email, password) => async (dispatch) => {
//     try {
//         dispatch({
//             type: LOGIN_REQUEST
//         })
//         const config = {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             withCredentials: true
//         }
//         const { data } = await axios.post(`${import.meta.env.VITE_APP_API}/api/v1/login`, { email, password }, config);
//         console.log('Login Response:', data);
//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: data.user
//         });
//     } catch (error) {
//         dispatch({
//             type: LOGIN_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// Load user profile

export const LoginUsers = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };

        const { data } = await axios.post(`${import.meta.env.VITE_APP_API}/api/v1/login`, { email, password }, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        });
    }
};

export const LoadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_USER_REQUEST
        })
        const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/me`, { withCredentials: true })
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update information
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST })
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true
        }
        const { data } = await axios.put(`${import.meta.env.VITE_APP_API}/api/v1/me/update`, userData, config)
        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.success,
        })
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Update password
export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };

        const { data } = await axios.put(`${import.meta.env.VITE_APP_API}/api/v1/me/changePassword`, passwords, config);

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,

            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,

            payload: error.response.data.message,
        });
    }
};

// Forgot password
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };

        const { data } = await axios.post(`${import.meta.env.VITE_APP_API}/api/v1/password/forgot`, email, config);

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,

            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,

            payload: error.response.data.message,
        });
    }
};

// Reset password
export const resetPassword = (token, passwords) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        };

        const { data } = await axios.put(`${import.meta.env.VITE_APP_API}/api/v1/password/reset/${token}`, passwords, config);

        dispatch({
            type: NEW_PASSWORD_SUCCESS,

            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: NEW_PASSWORD_FAIL,

            payload: error.response.data.message,
        });
    }
};

//View all users by admin
export const viewAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USERS_REQUEST })
        const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/admin/all/users`, { withCredentials: true })

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data.users
        })

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update user - ADMIN
export const updateUsers = (id, userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_USER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
        const { data } = await axios.put(`${import.meta.env.VITE_APP_API}/api/v1/admin/users/${id}`, userData, config)
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// View user details
export const getUserDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST })

        const { data } = await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/admin/users/${id}`, { withCredentials: true })

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data.user

        })

    } catch (error) {

        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Action to deactivate (soft delete) a user
export const deactivatedUser = (id) => async (dispatch) => {
    try {
      dispatch({ type: SOFTDELETE_USER_REQUEST });
      
      const { data } = await axios.put(
        `${import.meta.env.VITE_APP_API}/api/v1/admin/account/deactivated/${id}`,
        {}, // If no body data is needed
        { withCredentials: true }
      );
  
      dispatch({
        type: SOFTDELETE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SOFTDELETE_USER_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };
  
// Action to activate (restore) a user
export const activatedUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: RESTORE_USER_REQUEST });

        const { data } = await axios.put(
            `${import.meta.env.VITE_APP_API}/api/v1/admin/account/activated/${id}`,
            {}, // If no body data is needed
            { withCredentials: true }
        );

        dispatch({
            type: RESTORE_USER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: RESTORE_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const Logout = () => async (dispatch) => {
    try {
        await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/logout`, { withCredentials: true });
        dispatch({
            type: LOGOUT_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}