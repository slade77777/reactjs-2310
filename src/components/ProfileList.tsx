import styled from "styled-components";
import {useState} from "react";

type User = {
  name: string,
  age: number,
  class: string,
  slogan: string
}
let userList: User[] = [
  {
    name: 'nguyen van a',
    age: 20,
    class: 'class 1',
    slogan: 'solgan 1'
  },
  {
    name: 'nguyen van b',
    age: 30,
    class: 'class 2',
    slogan: 'solgan 2'
  },
  {
    name: 'nguyen van c',
    age: 40,
    class: 'class 3',
    slogan: 'solgan 3'
  },
]

const Profile = ({user}: { user: User }) => {
  const [name, setName] = useState<string>();
  const [isShow, setShow] = useState(true);

  function hide() {
    setShow(false)
  }

  function show() {
    setShow(true)
  }

  return <div>
    {
      isShow ? <>
          <Paragraph>New name: </Paragraph><input onChange={e => setName(e.target.value)}/>
          <Paragraph>Name: {name || user.name}</Paragraph>
          <Paragraph>Age: {user.age}</Paragraph>
          <Paragraph>Class: {user.class}</Paragraph>
          <Paragraph>Slogan: {user.slogan}</Paragraph>
          <button onClick={hide}>Hide</button>
        </>
        : <button onClick={show}>Show</button>
    }
  </div>
}

const ProfileList = () => {
  return <Container>
    {
      userList.map((user) => <Profile user={user}/>)
    }
  </Container>
}

export default ProfileList

const Container = styled.div`
  background-color: white;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Paragraph = styled.p`
  color: black
`
