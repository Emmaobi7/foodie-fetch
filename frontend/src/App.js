import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './App.css';
import SignUp from './components/Signup';
import Login from './components/Login';
import Home from './pages/Home';

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Home/>
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
