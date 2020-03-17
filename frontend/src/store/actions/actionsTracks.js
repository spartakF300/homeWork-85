import {axiosApi} from "../../axiosApi";
import {push} from "connected-react-router";

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR';

export const fetchTracksSuccess = data => ({type: FETCH_TRACKS_SUCCESS, data});
export const fetchErrorRequest = error =>({type: FETCH_TRACKS_ERROR});
export const fetchTracksRequest = ()=>({type:FETCH_TRACKS_REQUEST});


export const getTracks = (albumsId) => {
    return async (dispatch, getState) => {
        const user = getState().users.user;
        if (!user) return dispatch(push('/login'));
        try {
            dispatch(fetchTracksRequest());
            const response = await axiosApi.get('/tracks?album=' + albumsId);
            dispatch(fetchTracksSuccess(response.data))
        }catch (e) {
            dispatch(fetchErrorRequest(e))
        }


    }
};

