import React, {useEffect, useState} from "react";
import axios from 'axios';

const GetData = (apiPathName) => {
    const [result, setResult] = useState(null)
    const getData = async ( ) => {
        //const {addApiValue, fetchApi} = React.useContext(ApiContext)
        try{
            let res = axios.get(`http://127.0.0.1:8000/`)
            let newResult = res.data
            setResult(newResult)
        } catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getData()
        console.log(result)
    }, [])
    return(
        <div>
            {result}
        </div>
    )
}

export default GetData