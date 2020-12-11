import { Form, Button, Dropdown } from "semantic-ui-react"
import useFormInput from "../hooks/useFormInput"
import { useState } from "react"

const KidForm = (props) => {

  const name = useFormInput(props.kidInfo ? props.kidInfo.name : "","name")
  // const nice = useFormInput(props.kidInfo.nice,"nice")

  // props.kidInfo.name ? props.kidInfo.name : 

  const [nice, setNice] = useState(props.kidInfo ? props.kidInfo.nice : true)

  // props.kidInfo.nice ? props.kidInfo.nice : 

// console.log("name from props: ", props.kidInfo.name)
// console.log("nice from props: ", props.kidInfo.nice)
// console.log("name from state: ", name.value)
// console.log("name from state: ", nice)

const handlSubmit = (e) => {
if(props.kidInfo){

  props.updateKid({
    name: name.value,
    nice: nice
  })
} else {
  props.addKids({
    id: Math.random(),
    name: name.value,
    nice: nice
  })
}
}

const handleNiceChange = (e) =>{
console.log("Nice/Naughty: ", e.target.innerText)
setNice(e.target.innerText === "Nice" ? true : false)
}

  return(
<>
  <Form onSubmit={handlSubmit}>
    <Form.Input {...name}/>
    <Dropdown 
      label = "Have you been naughty or nice" 
      onChange = {handleNiceChange}  
      placeholder='Status'
      value = {nice}
      search selection options={[{key: 1, text: "Naughty", value: false}, {key: 2, text: "Nice", value: true}]} />
    <Button type='submit'>Submit</Button>
  </Form>
</>
  )


}

export default KidForm