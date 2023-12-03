import './App.css'
import ListMessage from "./components/Chat/ListMessage.tsx";
import {useState} from "react";

export type Message = {
  content: string,
  user: 'A' | 'B'
}
function App() {
  const [listMes, setListMes] = useState<Array<Message>>([{
    content: 'this is message from A',
    user: 'A'
  }, {
    content: 'this is B rep',
    user: 'B'
  }])

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/2 bg-amber-200 py-24 px-40">
        <ListMessage user="A" messages={listMes}/>
      </div>
      <div className="w-1/2 bg-sky-300 py-24 px-40">
        <ListMessage user="B" messages={listMes}/>
      </div>
    </div>
  )
}

export default App
