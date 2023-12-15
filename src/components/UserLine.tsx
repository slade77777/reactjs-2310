import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {User} from "../page/Home.tsx";
import {instance} from "../axios-instance.ts";
import UserForm from "./UserForm.tsx";

const UserLine: FC<{ user: User, getList: () => void }> = ({user, getList}) => {
  const [isDelete, setDelete] = useState(false)
  const [isEdit, setEdit] = useState(false)

  function editUser() {
    // edit user
    setEdit(true)
  }

  function removeUser() {
    // remove usre
    setDelete(true);
  }

  function confirmDelete() {
    instance.delete(`/user/${user.id}`).then(() => {
      getList();
      setDelete(false);
    })
  }

  return <tr>
    <td>{user.id}</td>
    <Link to={`/detail/${user.id}`}>
      <td>{user.email}</td>
    </Link>
    <td>{user.fullname}</td>
    <td>{user.department}</td>
    <td>{user.position}</td>
    <td>
      <div className="flex flex-row gap-2">
        <button className="bg-blue-400" onClick={editUser}>Edit</button>
        <button className="bg-blue-400" onClick={removeUser}>Remove</button>
      </div>
    </td>
    {
      isDelete && <div
            className="fixed top-20 left-[30vw] w-[40vw] bg-white z-10 h-[20vh] border-solid border-2 border-black rounded-2xl flex flex-col items-center justify-center">
            Are you sure you want to delete?
            <div className="flex flex-row gap-2 mt-4">
                <button className="bg-blue-400" onClick={() => setDelete(false)}>Cancel</button>
                <button className="bg-blue-400" onClick={confirmDelete} >Confirm</button>
            </div>
        </div>
    }
    {
      isEdit && <UserForm user={user} closeForm={() => setEdit(false)} getList={getList}/>
    }
  </tr>
}

export default UserLine;
