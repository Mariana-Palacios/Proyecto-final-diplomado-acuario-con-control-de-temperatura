import React, {useEffect, useState} from "react";
import axios from 'axios';

const handleRequest = (apiPathName, value='', requestSelection) => {
    
    const [post, setPost] = useState(null);

    if (requestSelection == 'get'){
        useEffect(() => {
            axios.get(`http://127.0.0.1:8000${apiPathName}`).then((response) => {
            setPost(response.data);
            });
        }, []);
    }
    else if(requestSelection == 'post'){
        axios.post(`http://127.0.0.1:8000${apiPathName}`, value).then((response) => {
            setPost(response.data);
          });
    }
    else if(requestSelection == 'put'){
        axios.put(`http://127.0.0.1:8000${apiPathName}`, value).then((response) => {
          setPost(response.data);
        });
    }
    else if(requestSelection == 'delete'){
        axios.delete(`http://127.0.0.1:8000${apiPathName}`, value).then(() => {
            alert("deleted!");
            setPost(null)
        });
    }

    if (!post) return "No post!"

    return post 
}

export default handleRequest
