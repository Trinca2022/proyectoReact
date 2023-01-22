import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#"><img className="w-25" src="./Imagenes/Logo Don Julio.jpg" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Café</Nav.Link>
                        <Nav.Link href="#pricing">Cafeteras</Nav.Link>
                        <Nav.Link href="#pricing">Vajilla</Nav.Link>
                        <Nav.Link href="#features">Accesorios</Nav.Link>


                    </Nav>
                    <Nav>
                        <CartWidget />

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavBar