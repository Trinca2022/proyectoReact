import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const categories = [
    { id: '1', name: 'Cafe', idCategory: 'Cafe' },
    { id: '2', name: 'Cafeteras', idCategory: 'Cafeteras' },
    { id: '3', name: 'Vajilla', idCategory: 'Vajilla' },
    { id: '4', name: 'Accesorios', idCategory: 'Accesorios' },
    //{ id: '5', name: 'Aaaa', idCategory: 'Aaaa' },
]

const NavBar = () => {
    return (
        <Navbar className="bar" collapseOnSelect expand="lg" bg="black" variant="dark">
            <div className="bar-container">
                <Link to='/' ><img className="w-25" src="../Imagenes/LogoDonJulio.jpg" /></Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {categories.map(categ => <NavLink to={`/Category/${categ.idCategory}`} className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'}>{categ.name}</NavLink>)
                        }

                        <NavLink to='/Category/Cafe' className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'}>Café</NavLink>

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

/*<NavLink to='/Category/Cafe' className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'}>Café</NavLink>
                        <NavLink to='/Category/Cafeteras' className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'} >Cafeteras</NavLink>
                        <NavLink to='/Category/Vajilla' className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'}>Vajilla</NavLink>
                        <NavLink to='/Category/Accesorios' className={({ isActive }) => isActive ? 'btn btn-primary categoryButton' : 'btn btn-outline-primary categoryButton'}>Accesorios</NavLink>
*/