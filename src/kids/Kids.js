import { Header } from "semantic-ui-react"
import { useEffect, useState } from "react"
import Axios from "axios"

const Kids = () => {

  const [kids, setKids] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    renderKids()
  },[])
  
  
  const renderKids = async () => {
   try{
    let res = await Axios.get("https://my-json-server.typicode.com/white731/demo/kids")
    console.log("Render Kids")
    console.log(res.data)
    setLoading(false)
    setError(false)
    setKids(res.data)

   } catch(err){
     console.log (err)
     setError(true)
   }
  }

  const getKidList = ()=>{
  return kids.map(k => {
    return (
    <p key = {k.id}>{k.name} {k.nice ?  "\u2705" : 	"\u274C"}</p>
      )
  })
}

  if (loading) return <div>Loading</div>
  if (error) return <h1>{error}</h1>


  return (
    <div>
      <Header as ="h1">Naughty and Nice List</Header>
      {getKidList()}
    </div>
  )


}

export default Kids