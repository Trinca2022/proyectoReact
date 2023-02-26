import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/ItemDetail/:idProducto' element={<ItemDetailContainer />} />
          <Route path='/Category/:idCategory' element={<ItemListContainer />} />


          <Route path='*' element={<Navigate to='/' />} />

        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
