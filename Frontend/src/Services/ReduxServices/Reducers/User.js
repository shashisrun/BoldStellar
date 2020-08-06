import API from '../../ApiCall';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Routing from '../../Routing';
import {setLoginTrue, setLoginFalse} from './LoginStatus';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSucces = userDetail => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: userDetail
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUser = error => {
    return (dispatch) => {
        dispatch(fetchUserRequest);
        API('user')
        .then(res => {
            const userDetail = res.data;
            dispatch(setLoginTrue());
            dispatch(fetchUserSucces(userDetail));
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(setLoginFalse());
            dispatch(fetchUserFailure(error));
        })
    }
}

const initialState = {
    loading: false,
    user: {
        id: '',
        email: '',
        name: '',
        permissions: ''
    },
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_USER_SUCCESS: return {
            ...state,
            loading: false,
            user: action.payload,
            error: ''
        }

        case FETCH_USER_FAILURE: return {
            ...state,
            loading: false,
            user: [],
            error: ''
        }
            
            break;
    
        default: return state
            break;
    }
}


function MapStateToProps(state) {
    return{
        userDetail: state.userDetail
    }
}

function MapDispactchToProps(state) {
    return bindActionCreators(fetchUser, dispatch);
}

const user = connect(MapStateToProps, MapDispactchToProps)(Routing);