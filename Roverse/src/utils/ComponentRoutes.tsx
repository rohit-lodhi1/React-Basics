import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "../pages/errors/Error404";
import { Home } from "../pages/home/Home";
import App from "../App";
import { Banner } from "../components/banners/Banner";
import { Services } from "../components/services/Services";
import { Cart } from "../components/cart/Cart";
import { Checkout } from "../components/checkout/Checkout";
import { Shop } from "../components/shop/Shop";
import { ProductDetails } from "../components/product-details/ProductDetails";
import { SignUp } from "../components/auth/SignUp";

const routes = createBrowserRouter([
    {
        path: '', element: <App />,
        children: [
            {
                path: '', element: <Home />
            },
            {
                path: 'cart', element: <Cart />
            },
            {
                path: 'checkout', element: <Checkout />
            },
            {
                path: 'shop', element: <Shop />
            },
            {
                path: 'product/:id', element: <ProductDetails />
            }
        ]
    },
    {
        path: 'signup', element: <SignUp />
    },
    {
        path: '*', element: <Error404 />
    },
])

export default routes
