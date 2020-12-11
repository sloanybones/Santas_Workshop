import { Button, Form, Header } from "semantic-ui-react";
import {useState} from 'react';
import { Link } from "react-router-dom";

const ToyForm = (toys) =>{
    const [name, setName] = useState("");
    const [age_group, setAgeGroup] = useState("");
    const [img, setImg] = useState("");

    const handleSubmit = (e) =>{
        if(toys.id){
            toys.editToy({name, age_group,img, id: toys.id});
            toys.hideEditForm();
        }else{
            toys.addToy({name, age_group});
        }
        setName("");
        setAgeGroup("");
    }
    
 return(
     <>
    <Header>Toy Form</Header>
    <Form onSubmit={handleSubmit}>
        <Form.Input 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        name={name}
        placeholder="name your toy"
        label="Name"
        />
        <Form.Input 
        value={age_group}
        onChange={(e)=> setAgeGroup(e.target.value)}
        name={age_group}
        placeholder="what ages can play with this toy?"
        label="For Ages"
        />
        <Form.Input 
        value={img}
        onChange={(e)=> setImg(e.target.value)}
        name={img}
        placeholder="enter an image url"
        label="Image URL"
        />
        <Button style={{marginTop: "5%"}} type="submit">
            {toys.id ? "Edit Toy" : "Add Toy"}
        </Button>
    </Form>
    
    </>
 );
}
export default ToyForm;