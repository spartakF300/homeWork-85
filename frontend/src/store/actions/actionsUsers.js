import {axiosApi} from "../../axiosApi";
import {push} from "connected-react-router";

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const registerUserRequest = () => {
    return {type: REGISTER_USER_REQUEST}
};
export const loginUserRequest = () => {
    return {type: LOGIN_USER_REQUEST}
};
export const registerUserSuccess = () => {
    return {type: REGISTER_USER_SUCCESS};
};
export const registerUserFailure = error => {
    return {type: REGISTER_USER_FAILURE, error};
};

export const loginUserSuccess = user => {
    return {type: LOGIN_USER_SUCCESS, user};
};
export const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};
export const registerUser = userData => {
    return async dispatch => {
        try {
            dispatch(registerUserRequest());
        const response =  await axiosApi.post('/users', userData);

            dispatch(registerUserSuccess(response.data));
            dispatch(push('/'))
        } catch (error) {
            if (error.response) {
                dispatch(registerUserFailure(error.response.data));
            } else {
                dispatch(registerUserFailure({global: 'No internet'}));
            }

        }
    };
};

export const loginUser = userData => {
    return async dispatch => {
        try {
          const response =  await axiosApi.post('/users/sessions', userData);
            dispatch(loginUserSuccess(response.data));

            dispatch(push('/'));
        } catch (error) {
            if (error.response){
                dispatch(loginUserFailure(error.response.data));
            } else{
                dispatch(loginUserFailure({global: 'No internet'}));
            }

        }
    };
};
