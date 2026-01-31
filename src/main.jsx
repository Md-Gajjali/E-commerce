import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import RoutLayout from './RoutLayout.jsx';
import shop from './pages/shop.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { store } from '../src/store.js'
import { Provider } from 'react-redux'
import ProductDetails from './Pages/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RoutLayout,
    children: [
      { index: true, Component: Home },
      { path: "Shop", Component: shop },
      { path: "Contact", Component: Contact },
      { path: "About", Component: About },
      { path: "ProductDetails/:id", Component: ProductDetails },
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
