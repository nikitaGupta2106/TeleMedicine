// import { Box, Center, Flex, Heading,Badge, Spacer,Text,InputGroup,Input,InputRightElement,Button } from '@chakra-ui/react'
// import React, { useContext, useState }  from 'react'
// import { AiOutlineSearch } from 'react-icons/ai';
// import { MdOutlineAccountCircle } from 'react-icons/md';
// import { BsCart2 } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';
// import { Appcontext } from '../ContextProvider/AppcontextProvider';


// const Navbar = () => {
//   let {cart,setCart}=useContext(Appcontext);

//   const [showSearchBar, setShowSearchBar] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const handleButtonClick = () => {
//     setShowSearchBar(!showSearchBar);
//   };
//   const handleSearchQueryChange = (event) => {
//     setSearchQuery(event.target.value);
//   };
//   let navigate=useNavigate();

//   const handleSearch = () => {
//     // console.log('Search query:', searchQuery);
//     navigate("/products")
//   };


//   const cartItemCount = cart.length;

//   return (
//     <Box border={"2px solid rgb(42,40,42)"} style={{width:"100%"}} h={"12vh"}>
//       <Text style={{background:"rgb(47,47,47)",color:"white",width:"100%",textAlign:"center",}}> Free shipping on orders over 500 rupees </Text>
   
   
   
//     <Flex style={{width:"80%",margin:"0px auto",padding:"0px",justifyContent:"space-between",alignItems:"center",}}>

//       <Box onClick={()=>{
//         navigate("/");
//       }} borderLeft={"2px solid black"} borderRight={"2px solid black"} paddingLeft={"10"}  paddingRight={"10"}  h={"50px"}>
//         <Heading>LET IT BEE.CO</Heading>
//       </Box>

//       <Box>

//       {showSearchBar ? (
//         <InputGroup >
//           <Input
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={handleSearchQueryChange}
//           />
//           <InputRightElement width="4.5rem">
//             <Button  size="sm" onClick={handleSearch}>
//               Search
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       ):<Spacer/>}
//       </Box>


//       <Flex alignItems={"center"} justifyContent={"center"} gap={"40px"}>

//         <Box onClick={handleSearch} pt={"10px"} pr={"30px"} pl={" 30px "} borderLeft={"2px solid black"} borderRight={"2px solid black"} h={"50px"} ><AiOutlineSearch  style={{fontSize:"30px"}}/></Box>

//         <Box  h={"50px"} pt={"10px"}><MdOutlineAccountCircle  style={{fontSize:"30px",display:"flex",margin:"auto"}}/></Box>

//         <Box borderLeft={"2px solid black"}  h={"50px"} borderRight={"2px solid black"} p={"0 30px "}>
//       <Box position="relative" display="inline-block" >
//         <Box
//           color="white"
//           borderRadius="full"
//           boxSize="30px"
//           textAlign="center"
//           fontSize="sm"
//           fontWeight="bold"
//           position="absolute"
//           top="8px"
//           right="-7px"
//           zIndex="docked"
//         >
//           <Badge borderRadius={"full"} background={"#F05A1F"}>{cartItemCount}</Badge>
//         </Box>
//         <Box
//           w="50px"
//           h="50px"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           cursor="pointer"
//           onClick={()=>{
//             navigate("/cart")
//           }}
//         >
//           {/* Your cart icon here */
//           <BsCart2 style={{fontSize:"30px"}}/>
//           }
//         </Box>
//       </Box>
//     </Box>

//       </Flex>
//     </Flex>
//     </Box>
//   )
// }

// export default Navbar






import { Box, Center, Flex, Heading,Badge, Spacer,Text,InputGroup,Input,InputRightElement,Button } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import { Appcontext } from '../ContextProvider/AppcontextProvider';
import React, { useContext, useEffect, useState }  from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';




const Navbar = () => {
  
    const { loginWithRedirect, isAuthenticated , logout, user } = useAuth0();
  const [showSearchBar, setShowSearchBar] =  useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  let {cart,setCart,isauth,setisauth}=useContext(Appcontext);




  const handleButtonClick = () => {
    setShowSearchBar(!showSearchBar);
  };
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };


    let navigate=useNavigate();

  const handleSearch = () => {
    // console.log('Search query:', searchQuery);
    navigate("/products")
  };


  const cartItemCount = cart.length;

useEffect(()=>{
  if(isAuthenticated)
setisauth(true)
else{
  setisauth(false);
}
},[isAuthenticated])

  return (
    <Box border={"2px solid rgb(42,40,42)"} style={{width:"100%"}} h={"12vh"}>
      <Text style={{background:"#185E49",color:"white",width:"100%",textAlign:"center",}}> Free shipping on orders over 500 rupees </Text>
   
   
   
    <Flex style={{width:"80%",margin:"0px auto",padding:"0px",justifyContent:"space-between",alignItems:"center",}}>

      <Box borderLeft={"2px solid black"} borderRight={"2px solid black"} paddingLeft={"10"}  paddingRight={"10"}  h={"50px"} onClick={()=>{
        navigate("/")
      }}>
        <Heading>LET IT BEE.CO</Heading>
      </Box>

      <Box>

      </Box>


      <Flex alignItems={"center"} justifyContent={"center"} gap={"40px"}>

        <Box onClick={handleSearch} pt={"10px"} pr={"30px"} pl={" 30px "} borderLeft={"2px solid black"} borderRight={"2px solid black"} h={"50px"} ><AiOutlineSearch  style={{fontSize:"30px"}}/></Box>

        <Box  h={"50px"} pt={"10px"}>{
          
          
  isAuthenticated ?
  <Text fontWeight={"bold"}>
    <p>{"Hi, " + user.nickname}</p>
  </Text>
:
          <MdOutlineAccountCircle onClick={()=>{
            loginWithRedirect()
          }}  style={{fontSize:"30px",display:"flex",margin:"auto"}}/>}</Box>

        <Box borderLeft={"2px solid black"}  h={"50px"} borderRight={"2px solid black"} p={"0 30px "}>
      <Box position="relative" display="inline-block" >
        <Box
          color="white"
          borderRadius="full"
          boxSize="30px"
          textAlign="center"
          fontSize="sm"
          fontWeight="bold"
          position="absolute"
          top="8px"
          right="-7px"
          zIndex="docked"
          onClick={()=>{

          }}
        >

          

          <Badge borderRadius={"full"} background={"#F05A1F"}>{cartItemCount}</Badge>
        </Box>

        
        <Box
          w="50px"
          h="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={()=>{
             navigate("/cart")
          }}
        >
          {/* Your cart icon here */
          <BsCart2 style={{fontSize:"30px"}}/>
          }
        </Box>
        
      </Box>
    </Box>

  

<>
  {
    isAuthenticated ? 
      <button onClick={() =>
       {logout({ logoutParams: { returnTo: window.location.origin } })

setisauth(false)
       }
       
       } style={{ backgroundColor: '#498070', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
        Log Out
      </button>:<></>
   }  
  
</>

{/* <button onClick={() => loginWithRedirect()} style={{ backgroundColor: '#498070', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
        Log In
      </button> */}
          
      </Flex>
    </Flex>
    </Box>
  )
}

export default Navbar