import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

document.addEventListener('load', (e) => {
  if (e.target.tagName === 'IMG') e.target.classList.add('loaded')
}, true)

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

requestAnimationFrame(() => {
  document.querySelectorAll('img').forEach((img) => {
    if (img.complete && img.naturalWidth > 0) img.classList.add('loaded')
  })
})
