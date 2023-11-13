import styled from "styled-components";
import {useState} from "react";

const FormRegister = () => {
  const [firstName, setFirstName] = useState<string>()
  const [email, setEmail] = useState<string>()

  const isValid = () => {
    if (firstName && email && email.includes('@') && email.includes('.')) {
      return true
    } else {
      return false
    }
  }

  console.log(isValid());

  return <Wrap>
    <Para>Register User</Para>
    <Label>First Name</Label>
    <input type="text" onChange={e => setFirstName(e.target.value)} />
    {firstName === '' && <ErrorMes>First name is required</ErrorMes>}
    <Label>Email</Label>
    <input type="text" onChange={e => setEmail(e.target.value)}/>
    {email === '' && <ErrorMes>Email is required</ErrorMes>}
    {email !== undefined && (!email?.includes('@') || !email?.includes('.')) && <ErrorMes>Email is not correct</ErrorMes>}
    {isValid() ? <Button>Register</Button> : <div style={{height: 20}} />}
  </Wrap>
}

export default FormRegister

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
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
