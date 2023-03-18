import React, {useState} from "react";

const handleBolean = (initialState, index) => {
    const [originalState, setOriginalState] = useState(initialState)
    const copyInitialState = [...initialState]
    copyInitialState[index]= !copyInitialState[index]
    setOriginalState(copyInitialState)
    return originalState
}

export default handleBolean