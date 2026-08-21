import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const Product = {
  companyName : "Dell" ,
  model : "Dell 15 AI-Powered Laptop",
  url : "https://backend.paiinternational.in/media/images/GT_eAC4QzV.webp" ,
  price : " ₹87,990" ,
  description : "Base Intel Core Ultra 5 / 16GB Variant"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App data={Product} />
  </StrictMode>,
)
