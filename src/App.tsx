import './App.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./page/Home.tsx";
import Login from "./page/Login.tsx";
import UserDetail from "./page/UserDetail.tsx";
import {Provider, useDispatch, useSelector} from 'react-redux'
import {RootState, store} from "./store.ts";
import {clearUser, saveUser} from "./slices/accountSlice.ts";
import {useEffect} from "react";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

const Layout = () => {
  const account = useSelector((state: RootState) => state.account)
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('email')) {
      dispatch(saveUser(localStorage.getItem('email') || ''))
    }
  }, [])

  function logout() {
    dispatch(clearUser());
  }

  return <div>
    <header className="flex flex-row justify-between">
      <p>header</p>
      <p>Email: {account.email} <button onClick={logout}>Logout</button></p>
    </header>
    <Outlet />
    <footer>footer</footer>
  </div>
}

export default App
