import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react"
import Axios from "axios"
import KidForm from "./KidForm"
import { Button, Card, Icon } from "semantic-ui-react"

const Kid = (props) => {

  const [kid, setKid] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()
  
  useEffect(()=>{
    renderKid()
  },[])
  
  
  const renderKid = async () => {
   try{
    let res = await Axios.get(`https://my-json-server.typicode.com/white731/demo/kids/${id}`)
    console.log("Render Kid")
    setKid(res.data)
    setLoading(false)
   } catch(err){
     console.log (err)
     setLoading(false)
     setError(err)
   }
  }

  const updateKid = async (kid) => {
    console.log("Updated this kid: ", kid.name)
    console.log("to : ", kid.nice)
    try {
      let res = await Axios.put(`https://my-json-server.typicode.com/white731/demo/kids/${id}`, kid)
      setKid(res.data)
    }
    catch (err) {
      console.log(err)
    }

  }

  if (loading) return <div>Loading</div>
  if (error) return <h1>{error}</h1>


  return (
    <div>
      <Button onClick={props.history.goBack}>Go Back</Button>
        <Card>
          <Card.Content header= {kid.name} />
          <Card.Content description = {kid.nice ? "Status: Nice" : "Status: Naughty"}/>
        </Card>
      <h4> Naughty/Nice Status: {kid.nice ? "Nice" : "Naughty"}</h4>
      <KidForm kidInfo = {kid} updateKid = {updateKid}></KidForm>
    </div>
  )


}

export default Kid