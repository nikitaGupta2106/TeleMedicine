import { Button, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Appcontext } from '../ContextProvider/AppcontextProvider'

const Pagination = () => {
    let {setPage,page}=useContext(Appcontext);
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={"20px"}>
      <Button  variant={"outline"} color={page==1?"white":"rgb(249,174,5)"} background={page===1?"rgb(47,47,47)":"white"} onClick={()=>{
        setPage(1)
      }}>1</Button>
      <Button variant={"outline"} color={page==2?"white":"rgb(249,174,5)"} background={page===2?"rgb(47,47,47)":"white"} onClick={()=>{
        setPage(2)
      }}>2</Button>
      <Button variant={"outline"} color={page==3?"white":"rgb(249,174,5)"} background={page===3?"rgb(47,47,47)":"white"} onClick={()=>{
        setPage(3)
      }}>3</Button>
      <Button variant={"outline"} color={page==4?"white":"rgb(249,174,5)"} background={page===4?"rgb(47,47,47)":"white"} onClick={()=>{
        setPage(4)
      }}>4</Button>
    </Flex>
  )
}

export default Pagination