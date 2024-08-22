import React from 'react'
import {Box, Stack, Typography} from '@mui/material';

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box sx={{marginTop : {lg : '200px', xs: '20px'}}} p = '20px'>
       <Typography variant='h3' mb={'33px'}>
        Watch <span style={{color: 'Red', textTransform: 'capitalize'}}>{name}</span> exercise Videos
       </Typography>
      {/* we want loop over exerciseVideos */}
       <Stack justifyContent='flex-start' flexWrap='wrap' alignItems= 'center'
          sx={{
            flexDirection: {lg: 'row'},
            gap: {lg: '110px', xs: '0'}
          }}
       >
         {exerciseVideos?.slice(0, 9).map((item,  index) => (  // slice se ye mtlb hai kitne yt video dikhiengi
            <a 
               key={index}
               className='exercise-video'
               href={`http://www.youtube.com/watch?v=${item.video.videoId}`}   // each video has unique id
               target='_blank'
               rel='noreferrer'
               >
               {/* //niche wali img RapidApi se milega */}
               <img src={item.video.thumbnails[0].url} alt= {item.video.title} />  
               <Box>
                <Typography variant= 'h5' color ='red'>
                  {item.video.title}
                </Typography>

                <Typography variant= 'h6' color ='#000'>
                  {item.video.channelName}
                </Typography>
               </Box>
               </a>

         ))}
       </Stack>
       
    </Box>
  )
}

export default ExerciseVideos