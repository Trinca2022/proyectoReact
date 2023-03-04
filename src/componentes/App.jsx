import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from '../context/CartContext';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContainer from './CartContainer/CartContainer';
import Error from './Error/Error';

const routes = [
  { route: '/', component: <ItemListContainer /> },
  { route: '/ItemDetail/:idProduct', component: <ItemDetailContainer /> },
  { route: '/Category/:idCategory', component: <ItemListContainer /> },
  { route: '/Cart', component: <CartContainer /> },
  { route: '/404Error', component: <Error /> },
  { route: '*', component: <Navigate to='/404Error' /> },
  //{ route: '/Cart', component: 'ItemListContainer' },
]

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <div>
          <Routes>
            {routes.map(rout => <Route path={`/${rout.route}`} element={rout.component} />)}
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>

  )
}

export default App

/*<Route path='/' element={<ItemListContainer />} />
            <Route path='/ItemDetail/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/Category/:idCategory' element={<ItemListContainer />} />
            <Route path='/Cart' element={<CartContainer />} />
            <Route path='/404Error' element={<Error />} />
            <Route path='*' element={<Navigate to='/404Error' />} />
*/