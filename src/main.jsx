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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <PrivateRoute><h1>cart</h1></PrivateRoute>
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
        path: '/update',
        element: <h1>update</h1>
      },
      {
        path: '/products/:brand',
        element: <PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
      {
        path: '/productDetail/:id',
        element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/productDetail/${params.id}`)
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