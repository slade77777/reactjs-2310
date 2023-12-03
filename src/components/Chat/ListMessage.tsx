import {Message} from "../../App.tsx";

const DetailMessage = ({mes, user}: {mes: Message, user: string}) => {
  return <div className="w-full">
    <p className={`text-black ${user === mes.user ? 'text-right' : 'text-left'}`}>{mes.content}</p>
  </div>
}

const ListMessage = ({user, messages} : {user: string, messages: Message[]}) => {
  return <div className="bg-white w-full h-full">
    <div className="text-black w-full text-center py-4">User: {user}</div>
    {
      messages.map((mes, index) => <DetailMessage mes={mes} key={index} user={user}/>)
    }
  </div>
}

export default ListMessage
