import './App.css'
import {createBrowserRouter, Outlet, redirect, RouterProvider} from "react-router-dom";
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
  // function checkLogin() {
  //   const emailLogin = localStorage.getItem('email');
  //   console.log(emailLogin);
  //   if (emailLogin) {
  //     return true;
  //   } else {
  //     return redirect('/login')
  //   }
  // }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/",
      element: <Layout />, // include header + footer
      // loader: () => checkLogin(),
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
