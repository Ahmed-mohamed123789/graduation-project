import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import LayOut from './component/LayOut/LayOut';
import Home from './component/Home/Home';
import LandingPage from './component/LandingPage/LandingPage';
import Login from './component/Login/Login';
import Register from './component/Register/Register';


const router = createBrowserRouter([
  {
    path:"/",
    element:<LayOut />,
    children:[
      { index: true, element: <LandingPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ]
  },
{
  path:"home",element:<Home />
}

])

function App() {

  return <RouterProvider router={router} />;

}

export default App
