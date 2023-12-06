import {FC} from "react";
import {Link} from "react-router-dom";
import {User} from "../page/Home.tsx";

const UserLine:FC<{user: User, index: number}> = ({user, index}) => {
  return <tr>
    <td>{index}</td>
    <Link to={`/detail/${index}`}><td>{user.email}</td></Link>
    <td>{user.username}</td>
  </tr>
}

export default UserLine;
