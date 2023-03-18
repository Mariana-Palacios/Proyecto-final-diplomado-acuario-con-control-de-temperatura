import { useState, useEffect } from 'react';
import axios from 'axios';

const handleRequest = (apiPathName, value = '', requestSelection,stateRequest, setStateRequest,e) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        e.preventDefault(); // Agregamos event.preventDefault() aquí
        let response;
        switch (requestSelection) {
          case 'get':
            response = await axios.get(`http://127.0.0.1:8000${apiPathName}`);
            break;
          case 'post':
            response = await axios.post(`http://127.0.0.1:8000${apiPathName}`, value);
            break;
          case 'put':
            response = await axios.put(`http://127.0.0.1:8000${apiPathName}`, value);
            break;
          case 'delete':
            response = await axios.delete(`http://127.0.0.1:8000${apiPathName}`, value);
            setStateRequest(null);
            alert('deleted!');
            break;
          default:
            throw new Error(`Invalid requestSelection: ${requestSelection}`);
        }
        setStateRequest(response.data);
      } catch (error) {
        console.error(error);
        setStateRequest(null);
      }
    };
    fetchData();
  }, [apiPathName, value, requestSelection]);

  if (!stateRequest) return "No post!"

  return stateRequest;
};

export default handleRequest;