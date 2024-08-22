import React, { useState } from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
// The reason why we need this in the home is bcz changes in these states are going to be reflected all across not just in the searchExercises 
// ye yeh sb   <HeroBanner /><Exercises /> <SearchExercises /> jagha pe refelect hoga
        
  const[bodyPart, setBodyPart] = useState('all');
    // this is for searchExercises
  const [exercises, setExercises] = useState([]);
    return (  // 3 components lenge
    <Box>
      <HeroBanner />
      <SearchExercises  
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}
      /> 
       {/* Now we're passing alll three of these props to our Searchexercises component */}
    
      <Exercises  
      exercises={exercises} 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      
      />
    </Box>
  )
}

export default Home;
