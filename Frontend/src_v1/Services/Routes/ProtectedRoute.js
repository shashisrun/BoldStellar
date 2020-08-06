import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

function ProtectedRoute ({ component: Component,props, ...rest }) {
  const user = useSelector(state => state.login.loggedIn)
  return (
    <Route {...rest} render={
      props => {
        if (user == true) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}
  
export default ProtectedRoute;
  
