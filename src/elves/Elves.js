import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "semantic-ui-react"
import ElfForm from "./ElfForm"


const Elves = () => {

  const [elves, setElves] = useState([
    { id: 1, name: "CandyCane Nutcracker", earsize: 8},
    { id: 2, name: "Gingernuts Jingleguest", earsize: 2},
    { id: 3, name: "Flake Cuddlesledge", earsize: 9},
    { id: 4, name: "Mistletoe Dreamcarol", earsize: 5},
    { id: 5, name: "Figgy Chillyglitter", earsize: 3},
    { id: 6, name: "Gingernuts Candycheer", earsize: 1},
    { id: 7, name: "Buddy Ribbonfrost", earsize: 10},
    { id: 8, name: "Noel Rhymetree", earsize: 4},
    { id: 9, name: "Cinnamon Giftlaugh", earsize: 6},
    { id: 10, name: "Nutmeg Wiggledash", earsize: 7},
  ]);
  
    const renderElves = () => {
      return elves.map((e) => (
        <Link to={`/elf/${e.id}`}>
          <h1 key={e.id}>{e.name}</h1>
          
        </Link>
      ));
    };

    return (
      <>
      <h1>This is our elves</h1>
      <Header>Elf List</Header>
      {renderElves()}
      <ElfForm/>
      
      </>



    )

    }

export default Elves;
