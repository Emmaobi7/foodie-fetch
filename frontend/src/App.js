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
        path: "/product/int:id",
        element: <ProductDetails />
      }
    ]
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
