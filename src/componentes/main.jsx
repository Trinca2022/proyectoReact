import React from 'react'
import ReactDOM from 'react-dom/client'
import { initFirestore } from '../firebase/config'
import App from './App'
import './index.css'

initFirestore()

ReactDOM.createRoot(document.getElementById('root')).render(

  <App />

)




