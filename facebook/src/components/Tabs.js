import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import { SlHome, SlPeople, SlGameController } from "react-icons/sl";


export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
    sx={{display: 'flex', justifyContent: 'center' }}>
      <Tabs
      className='tabs'
        value={value}
        onChange={handleChange}
        sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#2374E1', 
            },
            '& .MuiTab-root': {
              color: '#717171', // Change the tab text color
              backgroundColor: 'white', // Change the tab background color
            },
            '& .Mui-selected': {
                color: '#2374E1', // Selected tab text color
                backgroundColor: 'white', // Selected tab background color
              },
          }}
          aria-label="secondary tabs example"
        >
        <Tab value="home" icon={<SlHome />} />
        <Tab value="friend" icon={<SlPeople/>} />
        <Tab value="game" icon={< SlGameController/>} />
      </Tabs>
    </Box>
  );
}
