export const SET_LOGIN_TRUE = 'SET_LOGIN_TRUE';
export const SET_LOGIN_FALSE = 'SET_LOGIN_FALSE';


export const setLoginTrue = () => {
    return {
        type: SET_LOGIN_TRUE
    }
}

export const setLoginFalse = () => {
    return {
        type: SET_LOGIN_FALSE
    }
}
const initialState = {
    loggedIn: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_TRUE: return {
            ...state,
            loggedIn: true 
        }
        break;
        case SET_LOGIN_FALSE: return {
            ...state,
            loggedIn: false
        }
        break;
        default: return state
            break;
    }
}
