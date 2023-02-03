import { useState, useEffect } from 'react'
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Bienvenida from './Bienvenida/Bienvenida';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


function App(props) {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/ItemDetail/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/Category/:idCategory' element={<ItemListContainer />} />


        <Route path='*' element={<Navigate to='/' />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
