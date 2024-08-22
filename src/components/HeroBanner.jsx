// import React from 'react'
// import { Box, Stack, Typography, Button } from '@mui/material'
// import { motion } from 'framer-motion';
// import HeroBannerImage from '../assets/images/banner.png';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

// const HeroBanner = () => {


//   return (  // lets posn our box a bit for different devices // mt margintop // ml marginleft
//     <Box sx={{
//         mt: {lg: '200px', xs: '70px'},
//         ml: {sm: "50px"}
//     }} 
//     position="relative" p="20px" 
//     >
//         {/* <Typography color={"darkred"} fontWeight={"600"} fontSize={"26px"}>
//             Fitness Club
//         </Typography> */}

//         <Typography 
//                         color="darkred" 
//                         fontWeight={600} 
//                         sx={{
//                             fontSize:{xs:"70px",lg:"100px"}
//                         }}                    
//                     >                    
//                         Fitness Club
//                     </Typography>   


//         <Typography  color={" black"} fontWeight={700}
//         sx={{fontSize: {lg: "44px", xs: '40px'}}}
//          mb={"23px"} mt={"33px"}
//         >
//             Sweat, Smile <br /> and Repeat
//         </Typography>






//         <Typography fontSize={"22px"} lineHeight={"35px"} mb={7}>
//             Check out the most effective Exercises
//         </Typography>

//         {/* <Button variant= "contained" color='error' href='#exercises' sx={{backgroundColor :"blue", padding : "14px"}}>
//             Explore Exercises
//         </Button> */}

//         <Button 
//                         variant='contained' 
//                         endIcon={<ArrowForwardIosOutlinedIcon   sx={{ color: 'white' }} />}
//                         onClick={() => document.getElementById('searchExercises').scrollIntoView({ behavior: 'smooth' })}
//                         sx=
//                         {{
//                             backgroundColor:'darkred',
//                             padding:"10px 30px",
//                             boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
//                             '&:hover': {
//                                 backgroundColor: 'blue',
//                                 transform:'scale(1.1,1.1)',
//                                 transition:"all 0.4s",
//                                 boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
//                             },
//                         }}

//                     >
//                         Explore Exercises
//                     </Button>

//         <Typography
//             fontWeight={600} color="red" sx={{
//                 opacity:0.1, display: {lg: "block", xs: "none"}
//             }} fontSize={"200px"} >  Exercise
//         </Typography>

//         <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
//     </Box>
//   )
// }

// export default HeroBanner




import React from 'react'
import {Box, Stack , Typography, Button} from "@mui/material";
import HeroBannerImage from "../assets/images/banner3.jpg"
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroBanner = () => {
    const seq = [
        'Sweat,',
        500,
        'Sweat, Smile', 
        500,
        'Sweat, Smile and',
        500,
        'Sweat, Smile and Repeat',
        300,
        'Sweat, Smile and',
        300,
        'Sweat, Smile',
        300,
        'Sweat',
        300,
        ''
    ];
    const { ref, inView } = useInView();
    return (
        <Box          
            position="relative"
            p="20px"
        >
            <motion.div
                animate={{
                    x: inView ? 0 : '-100%', 
                    transition: { type: 'spring', stiffness: 80, damping: 10 } 
                  }}
                ref={ref}
            >
                <Box
                    sx=
                    {{
                        padding:{md:"20px 60px"}
                    }} 
                >
                    <Typography 
                        color="var(--color2)" 
                        fontWeight={600} 
                        sx={{
                            fontSize:{xs:"70px",lg:"100px"}
                        }}                    
                    >                    
                        Fitness HUB
                    </Typography>        
                    <Typography 
                        fontWeight={700}
                        color="var(--color1)"
                        sx=
                        {{
                            fontSize:{lg:'64px', xs:'40px'}
                        }} 
                        mb="23px" 
                        mt="30px"
                    >
                        <TypeAnimation
                            sequence={seq}  
                            repeat={Infinity}
                        />
                    </Typography>
                    <Typography 
                        fontSize="20px" 
                        lineHeight="28px" 
                        mb={4} 
                        fontStyle="DejaVu Sans Mono" 
                        fontFamily= "Comic Sans MS"
                        color="var(--color1)"
                    >
                        <Box 
                            sx=
                            {{
                                width:{lg:'500px',xs:'300px'}
                            }}
                        >
                           The difference between the impossible and the possible lies in a person’s determination❤️
                        </Box> 
                    </Typography>
                    <Button 
                        variant='contained' 
                        endIcon={<ArrowForwardIosOutlinedIcon />}
                        onClick={() => document.getElementById('searchExercises').scrollIntoView({ behavior: 'smooth' })}
                        sx=
                        {{
                            backgroundColor:'var(--color2)',
                            padding:"10px 30px",
                            boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                            '&:hover': {
                                backgroundColor: 'var(--color2)',
                                transform:'scale(1.1,1.1)',
                                transition:"all 0.4s",
                                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                            },
                        }}

                    >
                        Explore Exercises
                    </Button>
                </Box>     
            </motion.div>  
            <Typography 
                fontWeight={800}
                color="var(--color2)"
                sx={{
                    opacity:0.27,
                    display:{md:'block', xs:'none'},
                    position:'absolute',
                    top:{md:'280px',lg:'280px'},
                    left:{md:'280px',lg:'450px'},
                }}
                fontSize={150}
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
        </Box>
    )
}

export default HeroBanner