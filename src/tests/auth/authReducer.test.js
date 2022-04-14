import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'

describe('Pruebas en authReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })

  test('debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.LOGIN,
      payload: {
        name: 'Cesar',
      },
    }

    const state = authReducer({ logged: false }, action)
    expect(state).toEqual({
      logged: true,
      name: 'Cesar',
    })
  })

  test('debe de borrar el name del usuario y logged en false', () => {
    const action = {
      type: types.LOGOUT,
    }

    const state = authReducer({ logged: true, name: 'Juan' }, action)
    expect(state).toEqual({
      logged: false,
    })
  })
})
