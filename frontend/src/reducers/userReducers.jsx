import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_RESET,
    REGISTER_USER_FAIL,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

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

} from '../constants/userConstants';

// USER ACCESS CONTROL
export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case LOAD_USER_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case REGISTER_USER_REQUEST:
      case LOGIN_REQUEST:
        return {
          loading: true,
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,  // add success flag
          user: action.payload.user,
        };
      case LOGIN_SUCCESS:
      case LOAD_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
      case REGISTER_USER_FAIL:
      case LOGIN_FAIL:
      case LOAD_USER_FAIL:
        return {
          loading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
      case LOGOUT_SUCCESS:
        return {
          loading: false,
          isAuthenticated: false,
          user: null,
        };
      case LOGOUT_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      case REGISTER_USER_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
export const updateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }
        case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
            return {
                ...state,
                isUpdated: false,
            }
        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
        case NEW_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload,
            };

        case NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                success: action.payload,
            };

        case FORGOT_PASSWORD_FAIL:
        case NEW_PASSWORD_FAIL:

            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

// ADMIN ACCESS CONTROL
export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case ALL_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case USER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

const initialState = {
    loading: false,
    isUpdated: false,
    isSoftDelete: false,
    isRestored: false,
    error: null,
};

export const deprovisionReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
        case UPDATE_USER_REQUEST:
        case SOFTDELETE_USER_REQUEST:
        case RESTORE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };

        case SOFTDELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isSoftDelete: action.payload,
            };

        case RESTORE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isRestored: action.payload,
            };

        case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
        case UPDATE_USER_RESET:
            return {
                ...state,
                isUpdated: false,
            };

        case SOFTDELETE_USER_RESET:
            return {
                ...state,
                isSoftDelete: false,
            };

        case RESTORE_USER_RESET:
            return {
                ...state,
                isRestored: false,
            };

        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
        case UPDATE_USER_FAIL:
        case SOFTDELETE_USER_FAIL:
        case RESTORE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};