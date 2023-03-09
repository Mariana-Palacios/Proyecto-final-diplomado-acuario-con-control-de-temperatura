import React, {useEffect, useState} from "react";


const ApiContext = React.createContext({
    measuraments: [],
    data: [],
    fetchApi: () => {}
})
  
function handleSubmit(addNewApiValue, apiPathName ) {
    const {addApiValue, fetchApi} = React.useContext(ApiContext)
    
    const newApiValue = {
        apiPathName: addNewApiValue
    }

    fetch(`http://localhost:8000/${apiPathName}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newApiValue)
    }).then(fetchApi)
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