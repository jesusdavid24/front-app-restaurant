import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Image,
  Row,
} from 'react-bootstrap';
import logo from '../../assets/img/logo-tab.png'

const Topbar = () => {
  return (
    <div className="Topbar w-100 bg-black">
      <Navbar expand="lg" className="bg-body-black bg-black">
        <Row>
          <Container>
            <Navbar.Brand href="#home"><Image src={logo} alt="logo" width={80} fluid /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Row>
      </Navbar>
    </div>
  );
}

export default Topbar
