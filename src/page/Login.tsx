import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveUser} from "../slices/accountSlice.ts";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  function submit() {
    // check logic
    localStorage.setItem('email', email)
    // remove key
    // localStorage.removeItem('email')
    // correct => redirect to home
    dispatch(saveUser(email))
    navigate('/home')
  }

  return <div className="w-screen h-screen py-40 px-[40vw] bg-sky-300">
    <div className="bg-white w-full h-full flex flex-col justify-center items-center">
      <p className="text-black text-center mb-4">LOGIN PAGE</p>
      <div>
        <p className="text-black">Email:</p>
        <input type="text" onChange={e => setEmail(e.target.value)} className="bg-white text-black border-solid border-2 border-black rounded-2xl" />
      </div>
      <div>
        <p className="text-black">Password:</p>
        <input type="password"  className="bg-white text-black border-solid border-2 border-black rounded-2xl" />
      </div>
      <button onClick={submit} className="mt-4">SignIn</button>
      <Link to={"/home"} >
        Home page
      </Link>
    </div>
  </div>
}

export default Login;
