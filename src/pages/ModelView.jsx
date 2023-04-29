import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import {useGLTF,Stage,OrbitControls, PresentationControls} from '@react-three/drei'
import axios from 'axios'
import Spinner from '../components/spinner'

function Model(props)
{
  const {scene} = useGLTF('http://localhost:3000/'+props.fileName);
  return <primitive object={scene}{...props}/>;
}

export default function ModelView() {
  const {id} = useParams();
  const [fname,setFname] = useState(undefined);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/getName/${id}`)
    .then((res)=>{console.log(res.data.file)
      setFname(res.data.file);
      setLoading(false);
    })
    .catch((err)=>{console.log(err)})
  },[])

  return (
    <>
      {typeof(fname)==='undefined'?<div style={{paddingTop:"40vh",marginBottom:'50vh'}}><Spinner/></div>:
      <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{position:'absolute'}}>
          <color attach="background" args={['#DDDDDD']}/>
          <OrbitControls enableZoom enablePan enableRotate/>
            <Stage environment="sunset">
              <Model scale={0.03} fileName={fname}/>
            </Stage>
      </Canvas>}
    </>
  )
}
