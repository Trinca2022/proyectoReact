import { useState, useEffect } from 'react'
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Bienvenida from './Bienvenida/Bienvenida';


function App(props) {

  return (
    <>
      <NavBar />
      <Bienvenida />
      <ItemListContainer />
    </>
  )
}

export default App
