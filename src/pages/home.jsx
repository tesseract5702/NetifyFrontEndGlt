import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/spinner';
import axios from 'axios'
import Card from '../components/card'

export default function Home() {
  const [models,setModel] = useState([]);
  const [loading,setLoading] = useState(true);

  const getModel = async ()=>{
    axios.get('http://localhost:3000/api/getModels')
    .then((res)=>{setModel(res.data)
                  setLoading(false)
    })
    .catch((err)=>{console.log(err)})
  }

  useEffect(()=>{
    getModel();
  },[])
  return (
    <>
      <div id='page-container container' className='text-center bg-dark' style={{height:'93vh',overflow:'auto'}}>
        {loading && <div style={{paddingTop:"40vh",marginBottom:'50vh'}}><Spinner/></div>}
        <div className="container" id="prevData" style={{paddingTop:'20px'}}>
          <div className="row row-cols-1 row-cols-md-4 g-5 justify-content-center" id="cards" style={{padding:'7px',margin:'10px'}}>
            {models?.map((e)=>{
              return <Card key={e._id} name={e.name} id={e._id} detail={e.desc} image={e.thumbnail} user={e.user}/>
            })}
          </div>
        </div>
      </div>
    </>
  )
}
