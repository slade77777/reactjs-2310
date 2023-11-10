import styled from "styled-components";

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

const Profile = ({user}: {user: User}) => {

  return <div>
    <button onClick={() => {
      user.name = 'tran van a'
    }}>Change Name</button>
    <Paragraph>Name: {user.name}</Paragraph>
    <Paragraph>Age: {user.age}</Paragraph>
    <Paragraph>Class: {user.class}</Paragraph>
    <Paragraph>Slogan: {user.slogan}</Paragraph>
  </div>
}

const ProfileList = () => {
  return <Container>
    {
      userList.map((user) => <Profile user={user}  />)
    }
  </Container>
}

export default ProfileList

const Container = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const Paragraph = styled.p`
  color: black
`
