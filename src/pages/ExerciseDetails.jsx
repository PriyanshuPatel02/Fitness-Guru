import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'  // ye id ke liyr kaam aata hai
import { Box } from '@mui/material'

import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

 const ExerciseDetails = () => {
   const [exerciseDetail, setExerciseDetail] = useState({});  // initially empty object at the start
   const [exerciseVideos, setExerciseVideos] = useState([]);  // startring me empty array rhega
   
   const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
   const [equipmentExercises, setEquipmentExercises] = useState([]);

   // we also need to get the ID of the exercise & we can do that by saying const 
   const {id} = useParams(); 
 // useEffect use for Data Fetching: It allows you to fetch data from APIs when a component is mounted 
   useEffect(()  => {  
      const fetchExercisesData = async() => {
         const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
         const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
         const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);  // 2nd option which contains that key to allow us to make that request

         setExerciseDetail(exerciseDetailData);  /// populate exercisedetaildata

         const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);   // ch?q --> q means query....  exerciseDetailData.name ---> This going to give us the videos only about a specific exercise that we're currently looking the data 
         setExerciseVideos(exerciseVideosData.contents);
 /// fetch kr rhe hai API se
 // 3rd API call here
         const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);  // to provide the exerciseOption to be able to make call 
         setTargetMuscleExercises(targetMuscleExercisesData);
   
         const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
         setEquipmentExercises(equimentExercisesData);
      };

      fetchExercisesData();
   }, [id])  // This effect will run whenever `ID` changes.
  return (
    <Box>
    
  <Detail exerciseDetails ={ exerciseDetail}/>      {/* the key thing is going to be to send the exercise detail data right here */}
    <ExerciseVideos exerciseVideos = {exerciseVideos} name= {exerciseDetail.name} />
    <SimilarExercises  targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    
    </Box>
  )
}

export default ExerciseDetails
