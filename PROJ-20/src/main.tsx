import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './TelaReview'

//a ! avisa o ts que o elemento realmente existe, evitando erros de tipagem
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
