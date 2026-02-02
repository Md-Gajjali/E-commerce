import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import RoutLayout from './RoutLayout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { store } from '../src/store.js'
import { Provider } from 'react-redux'
import ProductDetails from './pages/ProductDetails.jsx';
import Shop from './pages/Shop.jsx';
import CartItems from './Componets/CartItems.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RoutLayout,
    children: [
      { index: true, Component: Home },
      { path: "Shop", Component: Shop },
      { path: "Contact", Component: Contact },
      { path: "About", Component: About },
      { path: "ProductDetails/:id", Component: ProductDetails },
      { path: "cart", Component: CartItems },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  </StrictMode>,
)
