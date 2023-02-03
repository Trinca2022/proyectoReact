import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar className="barra" collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Link to='/' ><img className="w-25" src="./Imagenes/Logo Don Julio.jpg" /></Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to='/Category/Cafe' className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Café</NavLink>
                    <NavLink to='/Category/Cafeteras' className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} >Cafeteras</NavLink>
                    <NavLink to='/Category/Vajilla' className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Vajilla</NavLink>
                    <NavLink to='/Category/Accesorios' className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Accesorios</NavLink>


                </Nav>
                <Nav>
                    <Nav.Link href="#"> <CartWidget /></Nav.Link>



                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}


export default NavBar