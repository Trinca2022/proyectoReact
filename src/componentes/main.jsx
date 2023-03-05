import ReactDOM from 'react-dom/client'
import { initFirestore } from '../firebase/config'
import App from './App'

initFirestore()
ReactDOM.createRoot(document.getElementById('root')).render(<App />)




