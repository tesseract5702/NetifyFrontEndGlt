import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

export default function NavBar() {
  return (
    <>
        <nav className="navbar navbar-light bg-dark" style={{borderBottom:'1px solid grey'}}>
        <div className="container-fluid">
            <Link to="/">
                <img src='https://vark.fbrk.in/assets/images/fabrik_full_logo.png' style={{height:'2rem'}}></img>
            </Link>
            <Modal/>
        </div>
        </nav>
    </>
  )
}
