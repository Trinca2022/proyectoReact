import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from '../context/CartContext';
import Purchase from './Purchase/Purchase';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import CartContainer from './CartContainer/CartContainer';
import Error from './Error/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

const routes = [
  { route: '/', component: <ItemListContainer /> },
  { route: '/ItemDetail/:idProduct', component: <ItemDetailContainer /> },
  { route: '/Category/:idCategory', component: <ItemListContainer /> },
  { route: '/Cart', component: <CartContainer /> },
  { route: '/Purchase/:idOrder', component: <Purchase /> },
  { route: '/404Error', component: <Error /> },
  { route: '*', component: <Navigate to='/404Error' /> },
]

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          {routes.map(rout => <Route key={rout.route} path={rout.route} element={rout.component} />)}
        </Routes>
      </CartContextProvider>
    </BrowserRouter>

  )
}

export default App

