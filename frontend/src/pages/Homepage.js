import React, { useEffect } from 'react'
import { Container , Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';
import { useHistory } from 'react-router-dom';
const homepage = () => {

  const history = useHistory()
  useEffect(()=>{
   const user = JSON.parse(localStorage.getItem("userInfo"))

   if(user){
     history.push("/chats") 
   }
  },[history])


  return <Container maxW='xl' centerContent> 
  <Box
  d='flex'
   justifyContent='center' 
   p={3} /* padding */ 
   bg={"white"}
   w="100%" 
   m="40px 0 15px"
   borderRaddiius="lg" 
   borderWidth="1px" >
    <Text  ml={40}  fontSize="4xl" fontFamily="Work sans" color="black">TALK-A-TIVE</Text>
  </Box>
      <Box bg="white" w="100%" p={4} borderWidth="1px">
      <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/> 
    </TabPanel>
    <TabPanel>
     
     <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  
} 

export default homepage
