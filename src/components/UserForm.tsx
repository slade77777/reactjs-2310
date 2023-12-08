import {useForm} from "react-hook-form";
import {FC} from "react";
import {User} from "../App.tsx";
import {instance} from "../axios-instance.ts";

const UserForm:FC<{closeForm: () => void, setUsers: (val: User[]) => void}> = ({closeForm, setUsers}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data: User) => {
    instance.post('/user', data).then(() => {
      closeForm()
      reset()
      //refetch list data
      instance.get('/user').then(response => {
        setUsers(response.data)
      })
    })

  };

  return <div className="fixed top-20 left-[30vw] w-[40vw] bg-white z-10 h-[60vh] border-solid border-2 border-black rounded-2xl flex flex-col items-center justify-center">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-black">Email:</p>
        <input type="text" {...register("email", { required: true })} className="bg-white text-black border-solid border-2 border-black rounded-2xl" />
      </div>
      <div>
        <p className="text-black">Username:</p>
        <input type="text" {...register("fullname", { required: true })} className="bg-white text-black border-solid border-2 border-black rounded-2xl" />
      </div>
      <div>
        <p className="text-black">Department:</p>
        <input type="text" {...register("department", { required: true })} className="bg-white text-black border-solid border-2 border-black rounded-2xl" />
      </div>
      <div>
        <p className="text-black">Position:</p>
        <input type="text" {...register("position", { required: true })} className="bg-white text-black border-solid border-2 border-black rounded-2xl" />
      </div>
      <button type="submit" className="bg-black w-full mt-12">Submit</button>
      <button onClick={closeForm} className="bg-black w-full mt-2">Close</button>
    </form>
  </div>
}

export default UserForm
