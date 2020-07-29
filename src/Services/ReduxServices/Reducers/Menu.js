import API from '../../ApiCall';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';


const initialState = {
	loading: false,
             create: {
                 title: '',
                 url: '',
                 parent: '',
                 status: '',
                 sortby: '',
             },
             read: {
                 id: ''
             },
             update: {
                 title:'',
                 url:'',
                 parent: '',
                 status: '',
                 sortby: '',
             },
             distroy: {
                 id: ''
             },
             error: ''
         }

const fetchMenuRequest = () => {
    return {
        type: FETCH_MENU_REQUEST
    }
}

const fetchMenuSucces = menuDetail => {
    return {
        type: FETCH_MENU_SUCCESS,
        payload: menuDetail
    }
}

const fetchMenuFailure = error => {
    return {
        type: FETCH_MENU_FAILURE,
        payload: error
    }
}

export const fetchMenu = error => {
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

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENU_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_MENU_SUCCESS: return {
            ...state,
            loading: false,
            menu: action.payload,
            error: ''
        }

        case FETCH_MENU_FAILURE: return {
            ...state,
            loading: false,
            menu: [],
            error: ''
        }
            
            break;
    
        default: return state
            break;
    }
}


function MapStateToProps(state) {
    return{
        menu: {
            create: state.create,
            read: state.read,
            update: state.update,
            distroy: state.distroy
        }
    }
}

// function MapDispactchToProps(state) {
//     return bindActionCreators(menu, dispatch);
// }

// const user = connect(MapStateToProps, MapDispactchToProps)(Routing);


