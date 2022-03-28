import React, { useContext } from 'react'
import { types } from '../../types/types'
import { AuthContext } from '../../auth/AuthContext'

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext)
  const handleLogin = () => {
    // history.replace('/')
    dispatch({
      type: types.LOGIN,
      payload: {
        name: 'Cesar',
      },
    })

    history.replace('/')
  }

  return (
    <div className='container mt-5'>
      <h1>Login Screen</h1>
      <hr />

      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
