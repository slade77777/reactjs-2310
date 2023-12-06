import {useParams} from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  console.log(params);
  return <div className="w-screen h-screen py-40 px-[40vw] bg-sky-300">
    <div className="bg-white w-full h-full flex flex-col justify-center items-center">
      <p className="text-black">ID: {params.id}</p>
      <p className="text-black">Email: </p>
      <p className="text-black">User name: </p>
    </div>
  </div>
}

export default UserDetail
