import React, {useEffect, useState} from "react";
import axios from 'axios';

const ApiContext = React.createContext({
    measuraments: [],
    data: [],
    fetchApi: () => {}
})
  
function handleSubmit(addNewApiValue, apiPathName, event ) {
    event.preventDefault(); // prevent form submission
    //const {addApiValue, fetchApi} = React.useContext(ApiContext)
    axios.post(`http://localhost:8000/${apiPathName}`, addNewApiValue)
        .then(res => console.log(res))
        

}
export default handleSubmit

/*
return (
    <form onSubmit={handleSubmit}>
    <InputGroup size="md">
        <Input
        pr="4.5rem"
        type="text"
        placeholder="Add a todo item"
        aria-label="Add a todo item"
        onChange={handleInput}
        />
    </InputGroup>
    </form>
)
*/