import React from 'react'
import {Stack , Typography} from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    // 1st render the stack cmpnt
    <Stack
      type="button"
      alignItems={'center'}
      justifyContent={'center'}
      className='bodyPart-card'
      sx={{   // hum yeha pass object le liye

          borderTop: bodyPart === item ? '4px solid #ff2625' : '', // yeh if else condition h tarnary operator ka use kiye hai
          bgcolor: 'white',
          borderBottomLeftRadius: '20px',
          width : '270px',
          height : '280px',
          cursor : 'pointer', gap : '47px'
      }}  

      onClick= {() => {
        setBodyPart(item);  // es se ye hua ki clik krne se red wali line uske upar aa jati hai
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
    >
      <img src={Icon} alt='dumbbell' style={{width:' 40px', height: '40px'}} />
       <Typography fontSize={"24px"} fontWeight={"bold"} color={"#3A1212"} textTransform={"capitalize"}> {item}</Typography>  {/* kaun sa item click hua hai ye es se pta chl jayega */}
    </Stack>
  )
}

export default BodyPart