import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar className='bg-body-tertiary shadow fixed-top' expand="lg" >
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'  >
              V Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' >
            <Nav className='me-auto justify-content-end w-100' >
              <Nav.Link href='/' className='active text-uppercase' >
                Home
              </Nav.Link>
              <Nav.Link href='/menu' className='text-uppercase' >
                Menu
              </Nav.Link>
              <Nav.Link href='/about' className='text-uppercase' >
                About
              </Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase' >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </div>
  );
}

export default App;
