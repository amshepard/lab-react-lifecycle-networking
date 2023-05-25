import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";

//https://resource-veterinarian-api.fly.dev/api/employees/${employee.id}



export const Employee = ({employee}) => {

  const [showPets, setShowPets] = useState(false);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
      .then((response) => response.json())
      .then((response) => {
        // console.log("It worked!")
        // console.log(response)
        setPets(response);
      })
  }, []) 
  
  return (
    <article className="employee">
      <h3>{employee.firstName} {employee.lastName}</h3>
      <h4>{employee.title}</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;




