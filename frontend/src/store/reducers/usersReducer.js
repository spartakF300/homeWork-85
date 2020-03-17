import {
    LOGIN_USER_FAILURE, LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_FAILURE, REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "../actions/actionsUsers";


const initialState = {
    registerError: null,
    loginError: null,
    registerLoading:false,
    loginLoading:false,
    user: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {...state,registerLoading: true};
        case REGISTER_USER_SUCCESS:
            return {...state, registerError: null,registerLoading: false};
        case REGISTER_USER_FAILURE:
            return {...state, registerError: action.error,registerLoading: false};
        case LOGIN_USER_REQUEST:
            return {...state,loginLoading: true};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user, loginError: null,loginLoading: false};
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error,loginLoading: false};
        default:
            return state;
    }
};
export default usersReducer;