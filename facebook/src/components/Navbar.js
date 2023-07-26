import React from "react"
import './Navbar.css'
import Tabs from './Tabs'
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
    fieldset {
        border-radius: 100px;
  }
`;

const Navbar = () => {
    return(
   <AppBar position="fixed" >
    <Toolbar sx={{
        bgcolor : 'white',
        display : 'flex',
        height : '2rem',
    }}>
        
        <FacebookIcon sx={{bgcolor : 'white', color : '#1877f2', fontSize : '50px', textAlign : 'center', mx:2}}/>
      
        <StyledTextField label="Facebook 검색" variant= 'filled'
        InputProps={{
            disableUnderline: true,
            
            style: {
                borderRadius: "30px",
                height : '40px',
              }
          }}
        sx={{
            textAlign : 'center',
            justifyContent : 'center',
            borderRadius: '30px',
            bgcolor : '#f0f2f5',
            height : '40px'
        }}/>
      
        <Button variant="contained"
        sx={{
            textAlign : 'center',
            justifyContent : 'center',
            borderRadius: '30px',
            height: '40px',
            width : 'fitContent',
            mx : 2,
        }}
        >검색</Button>
        <Box sx={{flexGrow : '0.3'}} />
        <Tabs />
        
    </Toolbar>
   </AppBar>
    );
}
export default Navbar;
