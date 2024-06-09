
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import AuthcontextProvider from './Componants/AuthcontextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(


  <AuthcontextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthcontextProvider>



)
