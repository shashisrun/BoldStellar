import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Services/ReduxServices/ReduxStore';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateNabar from './Components/Navbar'
import Routing from './Services/Routing'

ReactDOM.render(
		<React.StrictMode>
		   	<Provider store={store}>
	            <Router>
	                <header>
	                    <CreateNabar />
	                </header>
	                <div className="container-fluid content-body">
	                    <Routing />
	                </div>
	            </Router>
            </Provider>
		</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




