import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../../helpers';
import jwtDecode from 'jwt-decode';
import { AUTH_TOKEN } from '../../constant';


const UploadImage = () => {

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const token = getToken();
  const decoded = jwtDecode(token);
  const id = decoded.id;

  


  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('files', image);
      formData.append('refId', id);
      formData.append('field', "image");
      formData.append('ref', "plugin::users-permissions.user"); 

      // const response = await axios.post('http://localhost:1338/api/upload', formData, {
        const response = await axios.post('https://hydro-naval-server1.onrender.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${getToken()}`
        }
      });

      console.log(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}

export default UploadImage;





/*import React from "react";
import { Button, Card, Col, Form, Input, message, Row, Spin, Upload } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { useState } from "react";
import { getToken } from "../../helpers";
import axios from "axios";
import { withSuccess } from "antd/lib/modal/confirm";

const UploadImage = () => {
  const [files,setFiles] = useState()
  const uploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const headers = { 
      Authorization: `Bearer ${getToken()}`
    }

    formData.append('files', files[0])

    axios.post('http://localhost:1337/upload?refId=user&ref=users&field=image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getToken()}`
      }
    });
    console.log();
  } 

    /*axios.post("http://localhost:1337/api/upload?refId=user&ref=users&field=image",formData, {headers:headers})
    .then((response)=>{

      const imageId = response.data[0];
  

      axios.post("http://localhost:1337/api/users",{image:imageId}).then((response)=>{
        message.success("its done")
      }).catch((error)=>{
          //handle error
        })
    }).catch((error)=>{
        //handle error
    })
   }
   
   



  

  return(
 <div>
  <form onSubmit={uploadImage}>
        <input 
            type="file"
            onChange={(e)=>setFiles(e.target.files)}
        />
        <input type="submit" value="Submit" />
      </form>
 </div>
  );
};

export default UploadImage;*/