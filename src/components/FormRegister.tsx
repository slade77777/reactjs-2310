import styled from "styled-components";
import {FC, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required()

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  console.log(errors);

  return <Wrap>
    <Para>Register User</Para>
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
  height: 60vh;
  left: 30vw;
  width: 40vw;
  border: 1px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`
