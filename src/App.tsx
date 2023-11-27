import './App.css'
import {createContext, useContext, useState} from "react";
import {useForm} from "react-hook-form";

type Family = {
  grandFather: string,
  father: string,
  child: string
}

const FamilyContext = createContext({})

const FormFamily = ({saveInformation}: {saveInformation: (val: Family) => void}) => {

  const context = useContext(FamilyContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()
  const onSubmit = (data: Family) => {
    context.setFamily(data)
  }

  return <div>
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>GrandFather:</label>
        <input type="text" {...register('grandFather')}/>
      </div>
      <div/>
      <label>Father:</label>
      <input type="text" {...register('father')}/>
      <div/>
      <label>Son:</label>
      <input type="text" {...register('child')}/>
      <div />
      <button type="submit">Update</button>
    </form>
  </div>
}

const ChildInformation = () => {
  const context = useContext(FamilyContext)
  return <div>
    {/*Show child information*/}
    <p>Son: {context.family.child}</p>
  </div>
}

const ParentInformation = () => {
  const context = useContext(FamilyContext)
  return <div>
    {/*Show father information*/}
    <p>Father: {context.family.father}</p>
    <ChildInformation/>
  </div>
}

const FamilyInformation = () => {
  const context = useContext(FamilyContext)
  return <div>
    {/*Show grandfather information*/}
    <p>Grand father: {context?.family?.grandFather}</p>
    <ParentInformation />
  </div>
}

function App() {
  const [family, setFamily] = useState({
    grandFather: '',
    father: '',
    child: ''
  })

  console.log(family);
  // declare information
  return (
    <FamilyContext.Provider value={{family, setFamily}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw'}}>
        <FormFamily saveInformation={setFamily} />
        <FamilyInformation />
      </div>
    </FamilyContext.Provider>
  )
}

export default App
