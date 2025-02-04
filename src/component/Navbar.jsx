import { useState } from 'react';
import logo from '../../src/assets/PLogo.png';
import { navData, navIcon } from '../constant/const';
import { Box, SwipeableDrawer, List, ListItem, ListItemButton, ListItemText, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <header className="sticky top-0 lg:px-20 bg-[#52525365] w-full h-12 flex items-center justify-between select-none z-50 lg:h-16">
      <img src={logo} alt="Logo" loading="lazy"  className="w-9 ml-5 lg:ml-0 lg:w-12" />
      <nav className="hidden lg:flex gap-10 items-center">
        {navData.map(({ key, linkname, name }) => (
          <a key={key} href={`#${linkname}`} className="font-bold cursor-pointer text-xl text-white">
            {name}
          </a>
        ))}
        {navIcon.map(({ key, linkname, Download, icon: Icon }) => (
          <Tooltip key={key} title={name} arrow>
            <a href={linkname} download={Download}>
              <Icon className="text-[2rem] bg-blue-500 rounded-lg p-1" />
            </a>
          </Tooltip>
        ))}
      </nav>

      <div className="flex gap-5 lg:hidden text-white cursor-pointer">
      {navIcon.map(({ key, linkname, Download, icon: Icon }) => (
          <Tooltip key={key} title={name} arrow>
            <a href={linkname} download={Download}>
              <Icon className="text-[2rem] bg-blue-500 rounded-lg p-1" />
            </a>
          </Tooltip>
        ))}
     
        <MenuIcon onClick={toggleDrawer(true)} />
        <SwipeableDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
          <Box sx={{ width: 150, height: '100%', bgcolor: 'black',color:"white" }} onClick={toggleDrawer(false)}>
            <List>
              {navData.map(({ key, linkname, name }) => (
                <Link key={key} to={linkname} smooth duration={500}>
                  <ListItem disablePadding>
                    <ListItemButton className="text-purple-500 font-bold">
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </SwipeableDrawer>
      </div>
    </header>
  );
}

export default Navbar;
