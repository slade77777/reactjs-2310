import {useForm} from "react-hook-form";
import {FC} from "react";
import {instance} from "../axios-instance.ts";
import {User} from "../page/Home.tsx";

const UserForm: FC<{ closeForm: () => void, getList: () => void, user?: User }> = ({closeForm, getList, user}) => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    defaultValues: user || {}
  });
  const onSubmit = (data: User) => {

    if (user) {
      //case edit
      instance.put(`/user/${user?.id}`, data).then(() => {
        closeForm()
        reset()
        //refetch list data
        getList();
      })
    } else {
      //case create
      instance.post('/user', data).then(() => {
        closeForm()
        reset()
        //refetch list data
        getList();
      })
    }
  };

  return <div
    className="fixed top-20 left-[30vw] w-[40vw] bg-white z-10 h-[60vh] border-solid border-2 border-black rounded-2xl flex flex-col items-center justify-center">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-black">Email:</p>
        <input type="text" {...register("email", {required: true})}
               className="bg-white text-black border-solid border-2 border-black rounded-2xl"/>
      </div>
      <div>
        <p className="text-black">Username:</p>
        <input type="text" {...register("fullname", {required: true})}
               className="bg-white text-black border-solid border-2 border-black rounded-2xl"/>
      </div>
      <div>
        <p className="text-black">Department:</p>
        <input type="text" {...register("department", {required: true})}
               className="bg-white text-black border-solid border-2 border-black rounded-2xl"/>
      </div>
      <div>
        <p className="text-black">Position:</p>
        <input type="text" {...register("position", {required: true})}
               className="bg-white text-black border-solid border-2 border-black rounded-2xl"/>
      </div>
      <button type="submit" className="bg-black w-full mt-12 text-white">Submit</button>
      <button onClick={closeForm} className="bg-black w-full mt-2 text-white">Close</button>
    </form>
  </div>
}

export default UserForm
