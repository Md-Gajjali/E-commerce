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
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import BillingDetails from './pages/BillingDetails.jsx';
import { ToastContainer} from 'react-toastify';
import Account from './pages/Account.jsx';
import Error from './pages/Error.jsx';


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
      { path: "CartItems", Component: Cart },
      { path: "Wishlist", Component: Wishlist },
      { path: "Login", Component: Login },
      { path: "sign", Component: SignUp },
      { path: "Bill", Component: BillingDetails },
      { path: "Account", Component: Account },
      { path: "Error", Component: Error },
      
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>,
  </StrictMode>,
)
