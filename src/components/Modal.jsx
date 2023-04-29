import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Popup from 'reactjs-popup'
import style from './modal.module.css'
import InputBox from './inputBox'
import axios from 'axios'

export default function Modal() {
    const [err,setError]=useState(null);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    function handleSubmit(e)
    {
        e.preventDefault();
        let response;
        const ext = file.name.split('.').pop();
        // console.log(ext,"extension");
        const formData = new FormData();
        formData.append('modelName',name);
        formData.append('modelDesc',desc);
        if(thumbnail.type == 'image/jpg' || thumbnail.type == 'image/jpeg' || thumbnail.type == 'image/png')
        {
          formData.append('modelThumbnail',thumbnail);
        }
        else alert("Invalid File Type.Please upload image type file.");
        if(ext == 'glb' || ext == 'gltf' || ext == 'fbx')
        {
          formData.append('modelFile',file);
        }
        else alert("Invalid File Type.");
      
        axios.post('http://localhost:3000/api/upload',
          formData,{
          headers:{
            "Content-Type":'multipart/data',
          }
        })
        .then((res)=>{console.log(res.data)
          window.location.href="/"
        })
        .catch((err)=>{
          setError(err);
        })
        
    }

    function handleName(e)
    {
        setName(e.target.value);
    }
    function handleDesc(e)
    {
        setDesc(e.target.value);
    }
    function handleThumbnail(e)
    {
        setThumbnail(e.target.files[0]);
    }
    function handleFile(e)
    {
        setFile(e.target.files[0]);
    }

  return (
    <Popup trigger={<button className="button btn btn-primary"> Upload Model </button>} modal nested>
    {close => (
        <div className={style.modal}>
          <button className={style.close} onClick={close}>
            &times;
          </button>
          <div className={style.header}> Upload Model</div>
          <div className={style.content}>
            <form onSubmit={handleSubmit}>
                <InputBox
                type='text'
                onChange={handleName}
                titleContent="Model Name"
                name='modelName'/>
                <br />
                <InputBox 
                type='text'
                onChange={handleDesc}
                titleContent="Description"
                name='modelDesc'/>
                <br />
                <InputBox
                type='file'
                onChange={handleThumbnail}
                titleContent="Thumbnail"
                name='modelThumbnail'/>
                <br/>
                <InputBox
                type='file'
                onChange={handleFile}
                titleContent="Model File"
                name='modelFile'/>
                <div className={style.actions}>
                  <button
                    type='submit'
                    className="button btn btn-primary mx-2"
                    onClick={() => {
                      console.log('modal closed ');
                      setTimeout(()=>{
                        close();
                      },2000)
                    }}
                  >
                    Upload
                  </button>
                </div>
            </form>
          </div>
        </div>
      )}
    </Popup>
  )
}
