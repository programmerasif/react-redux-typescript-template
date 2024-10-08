import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import routs from './routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={routs} />
    </Provider>
    
  </StrictMode>,
)
