import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

function Exercises ({exercises, setExercises, bodyPart}) { // yeh sb props hai //Home.jsx se liye h
  
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 4;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise -  exercisesPerPage;  // 1st exercise on that  new page
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    const paginate = (e, value) => {
      setCurrentPage( value);

      window.scrollTo({top: 1800, behavior: 'smooth'})
    }

    // click krne ke baad open ho jaye particular exercise
    useEffect(() => {
      const fetchExercisesData = async () => {
        let exercisesData = [];

        if(bodyPart === 'all'){
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
        }
        else{
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }

        setExercises(exercisesData);  // setExer = exerciData
      }
      fetchExercisesData();
    }, [bodyPart]); // dependencies array
  return (
    <Box id= "exercises"
        sx={{mt: { lg : '110px'}}}  // sx style  // lg large devices
        mt={'50px'}  // margin top
        p={'20px'}
    >
    <Typography variant='h3' mb={'45px'} >
      Showing Results
    </Typography>

    <Stack direction={'row'} sx={{gap : {lg : '110px', xs: '50px'}}}
    flexWrap={'wrap'} justifyContent={'center'}>
      {currentExercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise ={exercise} />
      ))}
    </Stack>
{/* Pagination mtlb page no. dena */}
     <Stack mt={"100px"} alignItems={'center'}>
         {exercises.length > 4 && (
          <Pagination 
             color = 'standard'
             shape = 'rounded'
             defaultPage = {1}
             count = {Math.ceil(exercises.length / exercisesPerPage)}  // 4 exercises per page
             page = {currentPage} 
             onChange= {paginate}
             size = 'large'
               />
         )}
     </Stack>


    </Box>
  )
}

export default Exercises