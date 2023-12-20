import '../App.css'
import {useEffect, useState} from "react";
import UserLine from "../components/UserLine.tsx";
import UserForm from "../components/UserForm.tsx";
import {useCheckLogin} from "../hook/useCheckLogin.ts";
import {useDispatch, useSelector} from "react-redux";
import {getListUser} from "../slices/userSlice.ts";
import {RootState} from "../store.ts";

export type User = {
  id: number,
  email: string,
  fullname: string,
  department: string,
  position: string
}

function Home() {
  const [isAdding, setAdding] = useState(false);
  const dispatch = useDispatch()
  function closeForm() {
    setAdding(false)
  }

  useEffect(() => {
    dispatch(getListUser())
  }, [dispatch])

  const { users } = useSelector((state: RootState) => state.user)
  useCheckLogin();

  return (
    <div className="w-screen h-screen p-20 bg-sky-300">
      <div className="bg-white w-full h-full overflow-y-auto">
        <button onClick={() => setAdding(true)}>Add New User</button>
        <table className="text-black w-full text-center">
          <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {
            users.map((user) => <UserLine user={user} />)
          }
          </tbody>
        </table>
      </div>
      {
        isAdding && <UserForm closeForm={closeForm} />
      }
    </div>
  )
}

export default Home
