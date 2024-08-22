import React , {useState, useEffect} from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import SearchIcon from '@mui/icons-material/Search';



const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
// they'll be coming from the home page 
const[search, setSearch] = useState('');
// this is for search body parts
const[bodyParts, setBodyParts] = useState([]);  // empty array

//  for show categories we r using useEffect
useEffect(function(){
     const fetchExercisesData = async ()=> {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
//.......now wht do we do once we gety that data      
      setBodyParts(['all', ...bodyPartsData ]);
     }
// when do we want to call this fetch exercise data function,we immediately we call it, as soon as the app loads
    fetchExercisesData();
 }, [])  // [] dependency array as the second argument. If you pass an empty array, [] = run once after the initial render.

// async --> it has cspability to fetch some data.. it's going to pull some data from the API 


  const handleSearch = async() => {
      if(search){
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions); // these options are goig to authorize u to make the request
        // console.log(exercisesData)
// in api included --> bodyPart, equipment, gif, name, target
// exerxise search krne ke liye kya kya likh skte h woh ye decide krega
          const searchExercises = exercisesData.filter(
                  (exercise) => exercise.name.toLowerCase().includes(search) 
                  ||  exercise.target.toLowerCase().includes(search) 
                  ||  exercise.bodyPart.toLowerCase().includes(search) 

          ) ;
          // clear the search
          setSearch('');
          console.log("Data",exercisesData);
            console.log("searched exercises", searchExercises);
          // then we want to set the exercises 
          setExercises(searchExercises);
          document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' })
      }  
  }

  function handleChange(e){
      let textbar = e.target.value.toLowerCase()
       setSearch( textbar)
       console.log(textbar)
       
  }

  return (
    <Stack alignItems={"center"} 
    sx=
    {{ 
        mt:{xs:'50px',sm:"100px",md:'150px',lg:'200px'}
    }}   
    justifyContent="center" >
         <Typography   id="searchExercises"
         fontWeight={700} 
      sx={{fontSize : {lg :"44px" , xs: "30px"},   color:'purple'}} 
        
         mb={"24px"} textAlign={'center'}
         >
          Aww'some Exercises You Should Know 
         </Typography>


         <Box position={'relative'} mb={'72px'} >
    {/* //                  search Exercises      */}
             <TextField
    
              //  sx={{
              //     input: {
              //       fontWeight: "700",
              //       border: 'none',
              //       borderRadius: "4px"
              //     },
              //     width: {lg : "800px", xs:'350px'},
              //     bgcolor: "lightyellow", borderRadius : '4px'



              sx=
                    {{
                        input:{fontWeight:'400',color:'var(--color3)'},
                        width:{md:'800px',sm:'600px' ,xs:'350px'},
                        borderRadius: "40px",
                        border: '2px solid red',
                        overflow:"hidden",
                        
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'transparent',                           
                        },

                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'transparent', 
                        }, 
              


               }}
                 height = "75px"
                 value={search}
                 onChange= {handleChange}
                 placeholder='Search Exercises :)'
                 type='text'
             
             />

             <Button className='search-btn'
                endIcon={<SearchIcon/>}  // es se search icon mila
                sx={{
                    // bgcolor: "#ff2625",
                    // color: "yellow",
                    // textTransform: 'none',
                    // width: {lg:'175px', xs: '80px'},
                    // fontSize: {lg: '20px', xs: '14px'},

                    // height:'56px',
                    // position: 'absolute', 
                    // fontWeight :  "700",
                    // right : '0'
                    color:"red",
                        textTransform:"none",
                        width:{md:"140px",sm:'120px', xs:"100px"},
                        fontSize:{lg:'20px', md:'17px', xs:'14px'},
                        height:'58px',
                        position:"absolute",
                        right:"0",
                        "&:hover":{
                            transform: 'scale(1.1)',
                            backgroundColor:'transparent',
                            transition:'all 400ms'
                        }
          
                }}
 // what u want to search jo yeha se hoga
                onClick={handleSearch}
                >
                  Check
             </Button>
         </Box>
         <Box sx={{position:'relative', width: '100%', ml:{xs:"120px",sm:"150px",md:"50px",lg:"50px"}, }}>
               <HorizontalScrollbar data={bodyParts} bodyParts
                bodyPart= {bodyPart} setBodyPart= {setBodyPart} isBodyParts
          //this is going to be the selected bodypart the one on which we clicked
                />

         </Box>
    </Stack>
  )
}

export default SearchExercises;