import {FC} from "react";
import {Link} from "react-router-dom";
import {User} from "../page/Home.tsx";

const UserLine:FC<{user: User}> = ({user}) => {
  return <tr>
    <td>{user.id}</td>
    <Link to={`/detail/${user.id}`}><td>{user.email}</td></Link>
    <td>{user.fullname}</td>
    <td>{user.department}</td>
    <td>{user.position}</td>
  </tr>
}

export default UserLine;
