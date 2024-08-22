import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';


import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import IconButton from '@mui/material/IconButton';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow =() => {
  const {scrollPrev} = useContext(VisibilityContext);

  return (
    <Typography onClick = {() => scrollPrev()} className= "right-arrow">
      <img src={LeftArrowIcon} alt='right-arrow' />
    </Typography>
  )
};

const RightArrow =() => {
  const {scrollNext} = useContext(VisibilityContext);

  return (
    <Typography onClick = {() => scrollNext()} className= "left-arrow">
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  )
}
// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <IconButton onClick={() => scrollPrev()} className="right-arrow">
//       <ArrowBackIosIcon
//         sx=
//         {{
//           fontSize:"30px",
//           color:"var(--color2)",
//           my:"10px"       
//         }}
//       />        
//     </IconButton>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <IconButton onClick={() => scrollNext()} className="left-arrow" >      
//       <ArrowForwardIosIcon
//         sx=
//         {{
//           fontSize:"30px",
//           color:"var(--color2)" ,
//           my:"10px"       
//         }}
//       />
//     </IconButton>
//   );
// };

// const HorizontalScrollBar = ({data,bodyPart,setBodyPart,isBodyParts}) => {
//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
//       {
//         data?.map((item)=>(
//           <Box 
//             key={item.id || item}  
//             itemId={item.id || item} 
//             title={item.id || item}
//             m="0  20px"
//             sx=
//             {{
//               padding:"30px"
//             }}
//           >
//             {
//               isBodyParts ? 
//               (
//                 <BodyPart 
//                   item={item} 
//                   bodyPart={bodyPart} 
//                   setBodyPart={setBodyPart} 
//                 />
//               ):
//               (
//                 <ExerciseCard 
//                   exercise={item}
//                 />
//               )              
//             }                
//           </Box>
//         ))
//       }
//     </ScrollMenu>
//   )
// }
// export default HorizontalScrollBar

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts } ) => {  // data prop
  return (
     // we imeediately looop over the data using MAP
    <ScrollMenu LeftArrow = {LeftArrow} RightArrow = {RightArrow}>
          {data.map((item) => (
           <Box
           key={item.id || item}
           itemId= {item.id || item}
           title={item.id|| item}
           m = "0 40px"  // This margin ensures spacing between the items
           
           
           >
{/* here we re render our bodypart */}
          {isBodyParts ? <BodyPart 
          item= {item}  
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart} // these r some properties that we're going to passs through props
          /> : <ExerciseCard exercise={item} /> }
   {/* we can pass the item to it that way we'll be able to render it differently */}
  
         </Box>
          )   
      )}
    </ScrollMenu>
  )  // we r going to get each individual item nd for  each item we want to return a BOX
  // that box needs to have  key since we're looping over it ( us box ke andr key hona chahiye kyuki hum uske upr loop chlne wale hai)
}

export default HorizontalScrollbar

