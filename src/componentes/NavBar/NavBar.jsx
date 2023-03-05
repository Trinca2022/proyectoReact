import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import imgUrl from '../../../Imagenes/LogoDonJulio.jpg'
import './NavBar.css'

const categories = [
    { id: '1', name: 'Cafe', idCategory: 'Cafe' },
    { id: '2', name: 'Cafeteras', idCategory: 'Cafeteras' },
    { id: '3', name: 'Vajilla', idCategory: 'Vajilla' },
    { id: '4', name: 'Accesorios', idCategory: 'Accesorios' }
]

const NavBar = () => {
    return (
        <Navbar className="bar" collapseOnSelect expand="lg" bg="black" variant="dark">
            <div className="bar-container">
                <Link to='/' ><img className="w-25" src={imgUrl} /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {categories.map(categ => <NavLink key={categ.idCategory} to={`/Category/${categ.idCategory}`} className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'}>{categ.name}</NavLink>)
                        }
                    </Nav>
                    <Nav>
                        <NavLink to='/Cart'> <CartWidget /></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavBar
