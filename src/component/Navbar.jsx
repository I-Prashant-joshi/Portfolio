import { useEffect, useState } from 'react';
import logo from '../../src/assets/PLogo.png';
import { navData } from '../constant/const';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return; 
    }
    setDrawerOpen(open);
  };


  const list = () => (
    <Box sx={{ width: 150 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {navData.map((text) => (
          <ListItem key={text.key} disablePadding>
            <ListItemButton  style={{color:'#9d07f5',fontWeight:"bold",
          }}>
              <ListItemText primary={text.name} className='ml-3 '/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    
    </Box>
  );

  return (
    <header className="fixed lg:pl-20 lg:pr-20 bg-[#52525365] w-full h-12 flex items-center justify-between select-none z-50 lg:h-16 md:h-12">
      <div className='flex items-center justify-between w-full'>
      <div className="h-full w-[7rem] flex items-center">
        <img src={logo} alt="Logo" className="w-[2.3rem] ml-5 lg:ml-0 lg:w-[3rem]" />
      </div>
      <div className="hidden lg:flex gap-10 ml-10">
        {navData?.map((item) => (
          <nav key={item.key}
          className="font-bold lg:font-serif cursor-pointer text-[1.4rem] pt-2 text-[white]"
           >
            {item.name}
          </nav>
        ))}
      </div>
      </div>
      <div className='flex gap-4'>
      <div className="lg:hidden md:flex text-white w-10 cursor-pointer mt-2">
         <MenuIcon onClick={toggleDrawer(true)} />
        <SwipeableDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
          {list()}
        </SwipeableDrawer>
      </div>
      </div>
    </header>
  );
}

export default Navbar;