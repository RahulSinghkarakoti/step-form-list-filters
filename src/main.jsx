import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Form from './pages/Form.jsx'
import Ecommerce from './pages/Ecomerce.jsx'
import ResultPage from './components/ResultPage.jsx'

import {Provider} from 'react-redux'
import store from './store/store.js'
import Items from './pages/Items.jsx'


const router=createBrowserRouter([
  {
    path: '/',
    element: <App />,
  
  },
  {
    path: '/form',
    element: <Form/>
  },
  {
    path: '/Ecommerce',
    element: <Ecommerce/>
  },
  {
    path: '/result',
    element: <ResultPage/>
  },
  {
    path:'/api',
    element:<Items/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
