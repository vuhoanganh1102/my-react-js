
import {useState} from 'react'
function MyComponent(){
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);
    const updateName = () =>{
        setName("abcd");
        console.log(name)
    }
    const incrementAge = () =>{
        setAge(age + 10)
        console.log(age)
    }

    const toggleEmployedStatus = () =>{
        setIsEmployed(!isEmployed)
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle status</button>
        </div>
    )
}

export default MyComponent