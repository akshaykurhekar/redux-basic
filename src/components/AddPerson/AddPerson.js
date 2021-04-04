import React,{useState} from 'react';

import './AddPerson.css';

function AddPerson (props) {

    const [name,setName] = useState('');
    const [age,setAge] = useState('');

const nameHandler = (event)=>{
    setName(event.target.value);
}
const ageHandler = (event)=>{
    setAge(event.target.value);
}
    return (
         <div className="AddPerson">
             <input type="text" placeholder=" name " onChange={nameHandler } value={name} />
             <input type="number" placeholder=" Age " onChange={ageHandler}  value={age} />

          <button onClick={() => props.personAdded(name,age)}>Add Person</button>
        </div>
    );
}

export default AddPerson;