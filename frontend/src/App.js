import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from "./pages/Layout";
import ProductDetails from "./pages/ProductDetails";
import { Toaster } from 'react-hot-toast';
import { ShopContextProvider } from "./pages/context/AppContext";

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      }
    ]
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <div className="App">
        <ShopContextProvider>
          <RouterProvider router={router}/>
          <Toaster />
        </ShopContextProvider>
    </div>
  );
}

export default App;
