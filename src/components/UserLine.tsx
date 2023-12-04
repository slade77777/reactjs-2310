import {FC} from "react";
import {User} from "../App.tsx";

const UserLine:FC<{user: User, index: number}> = ({user, index}) => {
  console.log(user);
  return <tr>
    <td>{index}</td>
    <td>{user.email}</td>
    <td>{user.username}</td>
  </tr>
}

export default UserLine;
