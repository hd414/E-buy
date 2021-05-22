import React from 'react'
import { Redirect, Route } from 'react-router'

const SecuredRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            window.localStorage.token ? (
                <Component {...props} />) : (
                <Redirect to={{ pathname: '/signin' }} />)
        )} />
    )
}

export default SecuredRoute
