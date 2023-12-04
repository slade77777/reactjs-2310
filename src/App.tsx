import './App.css'
import {useState} from "react";
import UserLine from "./components/UserLine.tsx";
import UserForm from "./components/UserForm.tsx";

export type User = {
  email: string,
  username: string,
}
function App() {
  const [users, setUsers] = useState<Array<User>>([])

  const [isAdding, setAdding] = useState(false);

  function closeForm() {
    setAdding(false)
  }

  return (
    <div className="w-screen h-screen p-20 bg-sky-300">
      <div className="bg-white w-full h-full">
        <button onClick={() => setAdding(true)}>Add New User</button>
        <table className="text-black w-full text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user, index) => <UserLine user={user} index={index} />)
          }
          </tbody>
        </table>
      </div>
      {
        isAdding && <UserForm closeForm={closeForm} saveUsers={setUsers} />
      }
    </div>
  )
}

export default App
