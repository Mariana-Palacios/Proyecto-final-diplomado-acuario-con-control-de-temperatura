import React, {useEffect, useState} from "react";
import axios from 'axios';

const GetData = (apiPathName) => {
    const [post, setPost] = React.useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000${apiPathName}`).then((response) => {
        setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return post
}

export default GetData