import styled from "styled-components";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import {FC, useState} from "react";

type User = {
  firstName: string,
  email: string
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required()

const User:FC<{user: User}> = ({user}) => {

  const [isEditting, setEditting] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: user
  })

  const onSubmit = (data: User) => {
    console.log(data);
    reset();
  }

  return <div style={{ display: 'flex' ,flexDirection: 'row', gap: 8, alignItems: 'center'}}>
    <div>
      <Para>first name: {user.firstName}</Para>
      <Para>Email: {user.email}</Para>
    </div>
    <Button onClick={() => setEditting(true)}>Edit</Button>
    <Button>Remove</Button>
    {
      isEditting && <PopUp>
        <div style={{textAlign: 'right', color: 'black'}} >X</div>
        <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>First Name</Label>
            <input type="text" {...register("firstName")}  />
            {errors.firstName && <ErrorMes >{errors.firstName.message}</ErrorMes>}
            <div/>
            <Label>Email</Label>
            <input type="text" {...register("email")} />
            {errors.email && <ErrorMes >{errors.email.message}</ErrorMes>}
            <div/>
            <Button type="submit" >Register</Button>
          </form>
        </div>
      </PopUp>
    }
  </div>
}

const AddNewUser:FC<{closeModal: () => void, addUser: (val: User) => void}> = ({closeModal, addUser}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: User) => {
    console.log(data);
    reset();
    addUser(data)
    closeModal();
  }

  return (
    <PopUp>
      <div style={{textAlign: 'right', color: 'black'}} onClick={closeModal}>X</div>
      <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>First Name</Label>
          <input type="text" {...register("firstName")}  />
          {errors.firstName && <ErrorMes >{errors.firstName.message}</ErrorMes>}
          <div/>
          <Label>Email</Label>
          <input type="text" {...register("email")} />
          {errors.email && <ErrorMes >{errors.email.message}</ErrorMes>}
          <div/>
          <Button type="submit" >Register</Button>
        </form>
      </div>
    </PopUp>
    )
}

const FormRegister = () => {
  const [userList, setUserList] = useState<User[]>([])
  const [isAdding, setAdding] = useState(false)

  function addNewUser(val: User) {
    setUserList(prevState => {
      return [...prevState, val]
    })
  }

  return <Wrap>
    <Para onClick={() => setAdding(true)}>Register User</Para>
    {isAdding && <AddNewUser closeModal={() => setAdding(false)} addUser={addNewUser}/>}
    <div>
      {
        userList.map(user => <User user={user} />)
      }
    </div>
  </Wrap>
}

export default FormRegister

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const Para = styled.h3`
  color: black;
  `

const Label = styled.label`
  color: black;
  `

const Button = styled.button`
  margin: 10px 0 10px;
  height: 40px;
  background-color: #646cff;
`

const ErrorMes = styled.p`
  color: red;
  margin: 0;
`
const PopUp = styled.div`
  position: fixed;
  top: 20vh;
  height: 40vh;
  left: 30vw;
  width: 40vw;
  border: 1px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
`
