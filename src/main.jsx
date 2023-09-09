import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Users from './components/Users.jsx'
import HomePage from './components/HomePage.jsx'
import Products from './components/Products.jsx'
import Product from './components/Product.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    }
    , {
      path: "users",
      element: <Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
    {
      path: "users/:id",
      element: <User />
    },
    {
      path: "products/:id",
      element: <Product />
    }


  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

      <App />
    </RouterProvider>
  </React.StrictMode>,
)
