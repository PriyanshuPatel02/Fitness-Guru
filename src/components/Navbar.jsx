import React from 'react'
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import logo2 from '../assets/images/logo2.png';


const Navbar = () => {
  return (  // Initial stack
    <Stack direction="row"
    justifyContent={"space-around"} 
    sx={{gap: {sm: '122px', xs: '40px'},   // sm smalldevices  xs extrasmalldevices
    mt:{sm: '32px', xs:'20px'}, justifyContent: 'none'}} px={"25px"}  // mt margin top
    >
      <Link to="/">             
        <img src={logo2} alt='logo2' style={{width : '70px', height : '70px', margin: '0 40px'}}  />
      </Link>

      <Stack
         direction={"row"}
         gap={"40px"}
         fontSize={"24px"}
         alignItems={"flex-end"}

      >
        <Link to="/"  style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3.5px solid darkred'}}> Home </Link>
        <a href='#exercises' style={{textDecoration: 'none', color: '#3A1212'}}> Exercises  </a>
      </Stack>
    </Stack>
  )
}

export default Navbar



// import React, { useEffect, useState } from 'react'
// import {Link, useLocation} from 'react-router-dom';
// import { Stack } from '@mui/material';
// import Logo from "../assets/images/logo2.png"

// const Navbar = () => {

//   const location = useLocation();
//   const [currentPath,setCurrentPath] = useState('');
  
//   useEffect(()=>{
//     setCurrentPath(location.pathname);
//     console.log("from Navbar: Currentpath -> ",location.pathname);
//   },[location.pathname]);
  

//   return (
//     <Stack
//       display="flex"
//       justifyContent="space-around"
//       alignItems='center' 
//       sx=
//       {{
//         gap:{sm:'122px', xs:'40px'},
//         flexDirection:{sm:"row",xs:"col"},
//         mt:{sm:'0', xs:'20px'},
//         justifyContent:'none',
//       }} 
//       px="20px"
//     >
//       <Link to="/">
//         <img 
//           src={Logo} 
//           alt='logo' 
//           style=
//           {{
//             width:'200px' ,
//             height:'200px' , 
//             margin: '0 20px',
//             borderRadius:"110px"
//           }}
//         />
//       </Link>
//       <Stack 
//         display="flex"
//         gap="40px"
//         fontSize="38px"
//         alignItems="flex-end"
//         justifyContent="space-evenly"
//         sx=
//         {{
//           flexDirection:{sm:"row",xs:"row"}
//         }}
//       >
//         <Link 
//           to="/"
//           className='navbarContent' 
//           style=
//           {{
//             textDecoration:'none', 
//             color:'var(--color2)', 
//             borderBottom: currentPath === '/' ? '4px solid var(--color2)' : 'none',
//           }}
//         >  
//           Home
//         </Link>
//         {
//           currentPath === '/' ? 
//           (
//             <a 
//               // href="#exercises" 
//               className='navbarContent' 
//               style={{textDecoration:'none', color:'var(--color2)'}}
//               onClick={() => document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' })}
//             >
//               Exercises
//             </a>
//           ):(
//             <a 
//               // href="#instructions" 
//               className='navbarContent' 
//               style={{textDecoration:'none', color:'var(--color2)'}}
//               onClick={() => document.getElementById('instructions').scrollIntoView({ behavior: 'smooth' })}
//             >
//               Instructions
//             </a>
//           )
//         }
//       </Stack>
//     </Stack>
//   )
// }

// export default Navbar
