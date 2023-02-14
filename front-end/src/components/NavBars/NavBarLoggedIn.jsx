import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { DataProvider } from '../../context/Data';
import BadgeAvatars from './BadgeAvatar';
import Notification from './Notification';
import { TabTitle } from "../../utils/GeneralFunction";

function NavbarLoggedIn() {

  const context = useContext(DataProvider);

  const { tempValue } = context;

  TabTitle(tempValue.name)

  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <title />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Prudential</Navbar.Brand>
            <div id='notiification'>
              <Notification />
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <BadgeAvatars />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Event Schedules</Nav.Link>
                  <Nav.Link href="#action2">Live polling</Nav.Link>
                  <NavDropdown
                    title="More"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Q&A</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Leave us a feedback
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      <Button onClick={refreshPage}>Logout</Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/* <Button variant="outline-success">Search</Button> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavbarLoggedIn;