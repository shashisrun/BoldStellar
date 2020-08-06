import {createStore, applyMiddleware, combineReducers} from 'redux';
import {menuReducer} from './Reducers/Menu';
import {blogReducer} from './Reducers/Blog';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


// const rootReducer = combineReducers({user: userReducer, login: loginReducer, menu: menuReducer, blog: blogReducer})
const rootReducer = combineReducers({menu: menuReducer, blog: blogReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;