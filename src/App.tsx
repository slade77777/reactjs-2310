import './App.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./page/Home.tsx";
import Login from "./page/Login.tsx";
import UserDetail from "./page/UserDetail.tsx";

const Layout = () => {
  return <div>
    <header>header</header>
    <Outlet />
    <footer>footer</footer>
  </div>
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/",
      element: <Layout />, // include header + footer
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: "/detail/:id",
          element: <UserDetail />
        },
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
