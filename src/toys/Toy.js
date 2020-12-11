import { Button, Card, Grid, Image } from "semantic-ui-react";
import ToyForm from "./ToyForm";

const { useState } = require("react")

const Toy = ({name, age_group, id, img, updateHandler, removeToy}) =>{
    const [showForm, setShowForm] = useState(false);

    return(
        <Grid.Column>
                <Card.Group style={{padding: "7%"}} >
                 <Card key={id} >   
                 <Image src={img} wrapped ui={false}/>
                 <Card.Content>
                 <Card.Header>{name}</Card.Header>
                 <Card.Meta>
                     For ages: {age_group}
                 </Card.Meta>
                 </Card.Content>
                 <Button icon="pencil" onClick={()=> setShowForm(!showForm)} />
                 <Button color="red" icon="trash"/>
                  </Card>
                 </Card.Group>
                 {showForm && <ToyForm editToy={updateHandler}
                 id={id}
                 name={name}
                 age_group={age_group}
                 img={img}
                 hideEditForm={()=>setShowForm(false)}
                 />}
        </Grid.Column>
    )
}
export default Toy;