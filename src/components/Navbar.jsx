import { Navbar, Nav } from 'react-bootstrap'

const NavbarComp = () => {
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark' fixed='top'>
      <Navbar.Brand href='#home'>Farsiko Gama</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link className='mx-4' href='#skills'>
            Skills
          </Nav.Link>
          <Nav.Link className='mx-4' href='#portos'>
            Portofolio
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='mx-4' href='#about'>
            About
          </Nav.Link>
          <Nav.Link className='mx-4' href='#contact'>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComp
