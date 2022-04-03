import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

export const PublicRoute = ({
  isAutenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAutenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  )
}

PublicRoute.propTypes = {
  isAutenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}
