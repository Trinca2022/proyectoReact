import { useState, useEffect } from 'react'
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';


function App(props) {

  return (
    <>
      <NavBar />

      <ItemListContainer greeting='Bienvenido/a a Café Don Julio' />
    </>
  )
}

export default App
