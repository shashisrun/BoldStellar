
import React from 'react'
import Home from './../Pages/Home';
import Login from './../Pages/Login';
import Blog from './../Pages/Blog';
import Menu from './../Pages/Menu';
import Test from './../Pages/Test';
import PageNotFound from './../Pages/PageNotFound'
import { Route, Switch } from 'react-router-dom'

function Routing(){
    return(
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/blog' component={ Blog } />
                <Route exact path='/menu' component={ Menu } />
                <Route exact path='/page' component={ function(){ return( <h1>Our Client</h1> ) }  } />
                <Route exact path='/slider' component={ function(){ return( <h1>Career</h1> ) }  } />
                <Route exact path='/user' component={ Login } />
                <Route exact path='/role' component={ Test } />
                <Route exact path='/permission' component={ Test } />
                <Route exact path='/Test' component={ Test } />
                <Route component={ function(){ return( <h1>Page Not Found</h1> ) } } />

            </Switch>
        </React.Fragment>
    )
}

export default Routing
