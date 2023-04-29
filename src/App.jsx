import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home.jsx'
import NavBar from './components/navBar';
import ModelView from './pages/ModelView';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route
           exact
           path="/"
           element={<Home/>}>
          </Route>
          <Route
           exact
           path="/3dmodel/:id"
           element={<ModelView/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
