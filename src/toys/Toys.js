const { useState } = require("react")

const Toys = () =>{
    const [toys, setToys] = useState([
        {id: 1, name: "Army men", age_group: "4+"},
        {id: 2, name: "G.I. Joe", age_group: "3+"},
        {id:3, name: "Teenage Mutant Ninja Turtles", age_group: "3+"},
        {id: 4, name: "My Little Pony", age_group: "3+"},
        {id: 5, name: "Sock Monkey", age_group: "0+"},
        {id: 6, name: "Hot Wheels", age_group: "4+"},
        {id: 7, name: "Lego", age_group: "3+"},
        {id: 8, name: "Lincoln Logs", age_group: "3+"},
        {id: 9, name: "Barbie", age_group: "3+"},
        {id: 10, name: "Robot Dog", age_group: "6+"}
    ]);
    
    
}