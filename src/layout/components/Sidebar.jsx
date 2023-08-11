import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { pages } from './pages';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export const Sidebar = () => {
  const { checkLogOut } = useContext(AuthContext);
  const location = useLocation();

  let pageTitle = location.pathname;

  return (
    <Navbar expand={'xxl'} className='bg-body-tertiary mb-3'>
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xxl'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'xxl'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'xxl'}`}
          placement='start'
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Nav className='justify-content-start flex-grow-1 gap-3 '>
              {pages.map((page, index) => (
                <Link key={index} className={page.style} to={page.path}>
                  {page.title}
                </Link>
              ))}
            </Nav>
            <Nav>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  checkLogOut();
                }}
                variant='outline-secondary'
                size='sm'
              >
                Log out
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand
          style={{
            textTransform: 'uppercase',
            fontWeight: '600',
            fontSize: '1.3rem',
            letterSpacing: '5px',
          }}
        >
          {pageTitle}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
