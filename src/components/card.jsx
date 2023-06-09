import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsPlay} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function card(props) {
  const [isHover,setIsHover] = useState(false)
  const navigate = useNavigate();
  function handleClick(e)
  {
    // window.location.href="https://modelrender.onrender.com/3dmodel/"+e.target.id;
    navigate("/3dmodel/"+props.id);
  }
  return (
    <>
    <div className="modelBox container col" id={props.id} style={{ padding: 10 }}>
      <div className="card-body" style={{padding:'5px',backgroundColor:'#555755',borderRadius:'5px',boxShadow:'2px 2px 2px black'}}>
        <div style={{position:'relative'}}>
          <img
            className="img-fluid"
            src={"https://modelrender.onrender.com/"+props.image}
            alt={props.name}
            id={props.id}
            onMouseEnter={()=>{setIsHover(true)}}
            onMouseLeave={()=>{setIsHover(false)}}
            onClick={handleClick}
          />
          {isHover && (
            <div 
            onMouseEnter={()=>{setIsHover(true)}}
            onClick={handleClick}
            style={{
              position:'absolute',
              top:'50%',
              left:'50%',
              transform:'translate(-50%,-50%)',
              backgroundColor:'rgba(0,0,0,0.7)',
              borderRadius:'50%',
              padding:'10px'
              
            }}>
              <BsPlay size={40} color='#fff'></BsPlay>
            </div>
          )}
          
        </div>
        <h6 className="card-title" style={{ padding: 6 }}>
        {props.name}
        </h6>
        <h6>{props.detail}</h6>
        <div style={{backgroundColor:'black'}}>
          <h6 style={{color:'white'}}>{props.user}</h6>
        </div>
      </div>
    </div>
  </>
  )
}
