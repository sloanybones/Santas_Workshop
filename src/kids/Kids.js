import { Header, Card, Button } from "semantic-ui-react"
import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import KidForm from "./KidForm"

const Kids = () => {

  const [kids, setKids] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  
  useEffect(()=>{
    renderKids()
  },[])
  
  
  const renderKids = async () => {
   try{
    let res = await Axios.get("https://my-json-server.typicode.com/white731/demo/kids")
    setKids(res.data)
    setLoading(false)
    setError(false)
    

   } catch(err){
     console.log (err)
     setLoading(false)
     setError(true)
     setErrorMessage(err)
   }
  }

  const addKids = async (newKidObject) => {
    console.log("Kid to Add: ",newKidObject)

    try {
      let res = await Axios.post("https://my-json-server.typicode.com/white731/demo/kids", newKidObject)
      setKids([...kids, res.data])
      console.log(res)
      
    }
    catch (err) {
      console.log(err)
    }

  }

  const remove = (id) => {
    console.log(id)
    let kidsNew = kids.filter((k)=> k.id !== id)
    setKids(kidsNew)
  }


  const getKidList = ()=>{
  return kids.map(k => {
    return (
    
      <Card key = {k.id}>
        <Link  to={`/kids/${k.id}`}>
        <Card.Content>
        {k.name} ------------------------------------- {k.nice ? "\u2705" : "\u274C" }
        </Card.Content>
        </Link>
        <Card.Content>
          <Button onClick = {()=>remove(k.id)}>Delete</Button>
        </Card.Content>
      </Card>
   
      )
  })
}

  if (loading) return <div>Loading</div>
  if (error) return <h1>{errorMessage}</h1>

  return (
    <div>
      <Header as ="h1">Naughty and Nice List</Header>
      {getKidList()}
      <KidForm addKids = {addKids}/>
    </div>
  )


}

export default Kids

//  