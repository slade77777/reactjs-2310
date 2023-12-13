import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {instance} from "../axios-instance.ts";
import {User} from "./Home.tsx";
import {useCheckLogin} from "../hook/useCheckLogin.ts";

const UserDetail = () => {
  const params = useParams();
  const [user, setUser] = useState<User>()

  useEffect(() => {
    instance.get(`/user/${params.id}`).then(res => {
      setUser(res.data)
    })
  }, [])

  useCheckLogin();

  return <div className="w-screen h-screen py-40 px-[40vw] bg-sky-300">
    <div className="bg-white w-full h-full flex flex-col justify-center items-center">
      <p className="text-black">ID: {params.id}</p>
      <p className="text-black">Email: {user?.email}</p>
      <p className="text-black">User name: {user?.fullname}</p>
      <p className="text-black">Department: {user?.department}</p>
      <p className="text-black">Position: {user?.position}</p>
    </div>
  </div>
}

export default UserDetail
