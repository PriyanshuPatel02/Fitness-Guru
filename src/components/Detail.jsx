import React from 'react'
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Detail = ({exerciseDetails}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetails;
  // exercisedetails.bodyPart
  //exercisedetails.girUrl // ye sb nhi krenge direct destructing use kiye hai upar

  // create new kind of array that we can loop over 
   const extraDetail = [
    {
      icon : BodyPartImage,   // Changed 'icon' to 'img'
      name : bodyPart, /// ye direct api se aa rha hai
    },

    {
      icon: TargetImage,
      name : target,
    },

    {
      icon : EquipmentImage,
      name : equipment
    }
   ]

  return (
    <Stack gap={'60px'} sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img src={gifUrl} alt={name} loading= 'lazy' className='detail-image' />

    {/* // img ke below kuch or bhi cheze chahiye uske liye */}
    <Stack sx={{gap: {lg: '35px', xs: '20px'}}} >
         <Typography>
          {name}   {/* // render the name of the exercise */}

         </Typography>

         <Typography variant='h6'>
          Exercises keep you strong. {name} {` `}
          is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
         </Typography>

         {extraDetail.map((item) => (   // for each item you r rendering a stack component
          <Stack key={item.name} direction={'row'} gap={'24px'} alignItems={'center'} >
              <Button sx={{background: 'lightgreen', borderRadius: '50px', width: '90px', height : '90px'}}>
               <img src={item.icon} alt={bodyPart} style={{width : '50px', height: '60px'}} />     {/*  e.g., BodyPartImage, TargetImage). */}
              </Button>

              <Typography  textTransform= 'capitalize' variant = 'h5'>
                {item.name}
              </Typography>
          </Stack>    
         ))}
    </Stack>
    </Stack>
  )
}

export default Detail