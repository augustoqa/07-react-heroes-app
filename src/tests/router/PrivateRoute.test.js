import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { PrivateRoute } from '../../router/PrivateRoute'

describe('Pruebas en <PrivateRoute />', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  }

  Storage.prototype.setItem = jest.fn()

  test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(true)
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  })
})
