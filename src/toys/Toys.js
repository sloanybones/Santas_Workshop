import { Link } from "react-router-dom";
import { Card, Grid, Header , Image, Button} from "semantic-ui-react";
import Toy from "./Toy";
import ToyForm from './ToyForm'
const { useState } = require("react")

const Toys = () =>{
    // all images were grabbed using visual hunt
    const [toys, setToy] = useState([
        {id: 1, name: "Army men", age_group: "3+", img:"https://images-na.ssl-images-amazon.com/images/I/91BKdOpAeBL.jpg"},
        {id: 2, name: "G.I. Joe", age_group: "5+", img:"https://tse3.mm.bing.net/th?id=OIP.Ya324rRvi9Skwg7zHf6oVQAAAA&pid=Api"},
        {id:3, name: "Teenage Mutant Ninja Turtles", age_group: "3+", img:"https://tse1.mm.bing.net/th?id=OIP.neczpdGLPYUKAKasmBlndwAAAA&pid=Api"},
        {id: 4, name: "My Little Pony", age_group: "3+", img:"https://tse4.mm.bing.net/th?id=OIP.a4NcZ3i_gt5X--u7nOv4zgHaHa&pid=Api"},
        {id: 5, name: "Sock Monkey", age_group: "0+", img:"https://tse1.mm.bing.net/th?id=OIP.wCkT7WVMrzWUexDW39NSnAHaHa&o=6&pid=Api"},
        {id: 6, name: "Hot Wheels", age_group: "4+", img:"https://tse2.mm.bing.net/th?id=OIP.of5ovjY4Oi-o4RuW6ujkagHaE5&pid=Api"},
        {id: 7, name: "Lego", age_group: "3+", img:"https://tse1.mm.bing.net/th?id=OIP.zNnwXDJ_Gdg0UomIPRGbFQHaHa&pid=Api"},
        {id: 8, name: "Lincoln Logs", age_group: "3+", img:"https://tse3.mm.bing.net/th?id=OIP.egGYehRmTNzPDe2DdROmKAHaE1&pid=Api"},
        {id: 9, name: "Barbie", age_group: "3+", img:"https://tse1.mm.bing.net/th?id=OIP.CAOnG9nyNb2nPr2olX7VLwHaJ4&pid=Api"},
        {id: 10, name: "Robot Dog", age_group: "6+", img:"https://tse1.mm.bing.net/th?id=OIP.Qah5e-RJwVkHD4a77wTiugAAAA&pid=Api"}
    ]);
    const [showForm, setShowForm] = useState(false);
    
    
        const renderToys = () =>{
        return(toys.map((t)=>{
            return(
                <Toy key={t.id}
                {...t}
                updateHandler={updateToy} 
                removeToy={removeToy}/>
            );
        }));
    };

    const updateToy = (updateToy) =>{
        let newToys = toys.map(t=> t.id === updateToy.id ? updateToy : t);
        setToy(newToys);

    }
    
    const removeToy = (id) =>{
        let newToys = toys.filter(t => t.id !== id);
        setToy(newToys);
    }

    const addToy = ({name, age_group, img}) =>{
        let newToy = {
            id: Math.random(),
            name: name,
            age_group: age_group,
            img: img
        };

        let newToys = [...toys, newToy];
        setToy(newToys);
        setShowForm(false);
    }

    return (
        <>
        <Link to="/">Go Home</Link>
        <Header as="h1" style={{paddingTop: "7%"}} textAlign="center">Toys</Header>
        <Button style={{margin: "7% 0"}} onClick={()=> setShowForm(!showForm)}>Add a Toy</Button>
        {showForm && <ToyForm 
        toys={toys}
        addToy={addToy}
        updateToy={updateToy}
         />}
        <Grid>
            <Grid.Row columns={3}>
            {renderToys()}
            </Grid.Row>
        </Grid>
        </>
    )
    
} 
export default Toys;