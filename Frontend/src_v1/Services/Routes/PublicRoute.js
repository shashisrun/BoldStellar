import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

function PublicRoute ({ component: Component,props, ...rest }) {
  const user = useSelector(state => state.login.loggedIn)
  return (
    <Route {...rest} render={
      props => {
        if (user == false) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/profile',
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
  
export default PublicRoute;
  
