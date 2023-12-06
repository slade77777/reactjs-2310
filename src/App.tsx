import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./page/Home.tsx";
import Login from "./page/Login.tsx";
import UserDetail from "./page/UserDetail.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/detail/:id",
      element: <UserDetail />
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
