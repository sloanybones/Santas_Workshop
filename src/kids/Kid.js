import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react"
import Axios from "axios"

const Kid = (props) => {

  const [kid, setKid] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { id } = useParams()
  
  useEffect(()=>{
    renderKid()
  },[])
  
  
  const renderKid = async () => {
   try{
    let res = await Axios.get(`https://my-json-server.typicode.com/white731/demo/kids/${id}`)
    console.log("Render Kid")
    console.log(res.data)
    setLoading(false)
    setError(false)
    setKid(res.data)

   } catch(err){
     console.log (err)
     setLoading(false)
     setError(true)
   }
  }

  if (loading) return <div>Loading</div>
  if (error) return <h1>{error}</h1>


  return (
    <div>
      <h1> Name: {kid.name} </h1>
    </div>
  )


}

export default Kid