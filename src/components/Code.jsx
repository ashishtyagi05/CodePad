import { useContext } from 'react';
import React from 'react'
import Editor from './Editor'
import { Box,styled } from '@mui/material';
 
import { DataContext } from '../context/DataProvider';

const  Container = styled(Box)`
  display: flex ;
  background-color: #060606;
  height :50vh;
  ` 
const Code = () => {
  const {html,sethtml,css,setcss,js,setjs} = useContext(DataContext);
  return (
    <Container>
        <Editor
        
        title = "HTML" 
        icon= " /"
         color = "#FF3c41"
         value = {html}
         onChange = {sethtml}
         />

        <Editor

        title="CSS"
        icon ="*"
        color ="#0EBEFF"
        value = {css}
         onChange = {setcss}
        />
        <Editor
        title = "JS"
        icon = "()"
        color = "#FCD000"
        value = {js}
         onChange = {setjs}
        />

    </Container>
  )
}

export default Code;