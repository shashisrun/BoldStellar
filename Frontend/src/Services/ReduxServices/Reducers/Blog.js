import API from '../../ApiCall';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Routing from '../../Routing';

export const FETCH_BLOG_REQUEST = 'FETCH_BLOG_REQUEST';
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS';
export const FETCH_BLOG_FAILURE = 'FETCH_BLOG_FAILURE';


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

const fetchBlogRequest = () => {
    return {
        type: FETCH_BLOG_REQUEST
    }
}

const fetchBlogSucces = BlogDetail => {
    return {
        type: FETCH_BLOG_SUCCESS,
        payload: BlogDetail
    }
}

const fetchBlogFailure = error => {
    return {
        type: FETCH_BLOG_FAILURE,
        payload: error
    }
}

export const fetchBlog = error => {

    // return (dispatch) => {
    //     dispatch(fetchUserRequest);
    //     API('user')
    //     .then(res => {
    //         const userDetail = res.data;
    //         dispatch(setLoginTrue());
    //         dispatch(fetchUserSucces(userDetail));
    //     })
    //     .catch(error => {
    //         const errorMsg = error.message;
    //         dispatch(setLoginFalse());
    //         dispatch(fetchUserFailure(error));
    //     })
    // }    

}


export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOG_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_BLOG_SUCCESS: return {
            ...state,
            loading: false,
            user: action.payload,
            error: ''
        }

        case FETCH_BLOG_FAILURE: return {
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


