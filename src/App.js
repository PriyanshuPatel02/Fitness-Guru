import React from 'react'
import {Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




function App(){           // xl : extralarge  m,: margin   // responsive for larger devices
    return (
       <Box width="400px" sx={{width: {xl : '1488px'}}} m= "auto">
        <Navbar />    {/* humre pass 3 components hai Navbar, home, exerciseDetail */}
    <Routes> 
        <Route path="/" element={<Home />} />   
        {/* // agr koi / visit krega toh elemnt render hoga jo Home */}
        <Route path="/exercise/:id" element = {<ExerciseDetails />}   />   {/*jo id hai wo dynamic hogi */}

    </Routes>

        <Footer />
       </Box>
    )
}

export default App