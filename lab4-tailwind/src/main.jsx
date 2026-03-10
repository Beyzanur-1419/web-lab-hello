import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Eğer UI Kit sayfasını görmek istersen:
// import UIKit from './pages/UIKit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* UI Kit'i test etmek için geçici olarak App yerine bunu kullanabilirsin:
    <UIKit />
    */}
  </StrictMode>,
)
