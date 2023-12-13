import '../App.css'
import {useEffect, useState} from "react";
import UserLine from "../components/UserLine.tsx";
import UserForm from "../components/UserForm.tsx";
import {instance} from "../axios-instance.ts";
import {useCheckLogin} from "../hook/useCheckLogin.ts";

export type User = {
  id: number,
  email: string,
  fullname: string,
  department: string,
  position: string
}

function Home() {
  const [users, setUsers] = useState<Array<User>>([])

  const [isAdding, setAdding] = useState(false);

  function closeForm() {
    setAdding(false)
  }

  useEffect(() => {
    instance.get('/user').then(response => {
      setUsers(response.data)
    })
  }, [])

  useCheckLogin();

  return (
    <div className="w-screen h-screen p-20 bg-sky-300">
      <div className="bg-white w-full h-full">
        <button onClick={() => setAdding(true)}>Add New User</button>
        <table className="text-black w-full text-center">
          <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
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
        isAdding && <UserForm closeForm={closeForm} setUsers={setUsers} />
      }
    </div>
  )
}

export default Home
