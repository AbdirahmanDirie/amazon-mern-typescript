import { Link, Outlet } from 'react-router-dom';
// import { smapleproducts } from './data'
import { Badge, Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useEffect, useContext } from 'react'
import { Store } from './Store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LinkContainer } from 'react-router-bootstrap'
function App() {
  const {
    state: { mode, cart, userInfo },
    dispatch
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }

  return (
    <div className='d-flex flex-column vh-100'>
      <ToastContainer position='bottom-center' limit={1} />
      <header>
        <Navbar expand='lg'>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>TS Amazon</Navbar.Brand>
            </LinkContainer>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i
                className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}
              ></i>
            </Button>
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>

           

            {
              userInfo ? (
                <NavDropdown title={userInfo.name} id='basic-nav-dropdown'>
                  <Link
                  to='#signout'
                  className='dropdown-item'
                  onClick={signoutHandler}
                  >
                  Sign Out
                  </Link>

                  <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                </NavDropdown>
              ) : (
                <Link to="/signin" className="nav-link">
                Sign In
              </Link>
              )
            }
          </Nav>
        </Navbar>
      </header>

      <main>
        <Container className='mt-3'>
          <Outlet />
        </Container>
      </main>

      <footer>
        <div className='text-center'>
          All right reserved
        </div>
      </footer>
    </div>
  )
}

export default App
