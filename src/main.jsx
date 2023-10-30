import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AddProduct from "./Components/AddProduct/AddProduct";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BrandPage from "./Components/BrandPage/BrandPage";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";
import Cart from "./Components/Cart/Cart";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-api.vercel.app/productDetail/${params.id}`)
      },
      {
        path: '/products/:brand',
        element: <PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-api.vercel.app/products/${params.brand}`)
      },
      {
        path: '/productDetail/:id',
        element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-api.vercel.app/productDetail/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);