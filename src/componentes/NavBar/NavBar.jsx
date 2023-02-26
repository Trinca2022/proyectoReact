import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar className="bar" collapseOnSelect expand="lg" bg="black" variant="dark">

            <Link to='/' ><img className="w-25" src="../Imagenes/LogoDonJulio.jpg" /></Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to='/Category/Cafe' className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'}>Café</NavLink>
                    <NavLink to='/Category/Cafeteras' className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'} >Cafeteras</NavLink>
                    <NavLink to='/Category/Vajilla' className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'}>Vajilla</NavLink>
                    <NavLink to='/Category/Accesorios' className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'}>Accesorios</NavLink>


                </Nav>
                <Nav>
                    <Nav.Link href="#"> <CartWidget /></Nav.Link>



                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}


export default NavBar