import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// import Header from './components/Header'
// import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// const Root =  createRoot(document.querySelector('#root'));
// Root.render(<Header/>)