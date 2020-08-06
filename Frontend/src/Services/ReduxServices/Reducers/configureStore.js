import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './Reducers/reducers';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
	root:rootReducer
})
const initialState = {
		  visibilityFilter: 'SHOW_ALL',
		  todos: []
		}

export default function configureStore(initialState){
	
  return createStore(
    allReducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}