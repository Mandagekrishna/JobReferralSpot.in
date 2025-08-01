import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import EventNoteIcon from '@mui/icons-material/EventNote';


import {NavLink,useNavigate} from 'react-router-dom'


const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer({updateDrawer}) {

    let Navigate = useNavigate();

 
    let goBack =()=>{
        Navigate(-1);
    }

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    updateDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    updateDrawer(false)
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}  sx={{backgroundColor:"#7986cb"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'monospace', fontWeight:'bold' }}>
            CodeReferrence.in
          </Typography>
          <Button color="inherit"><NavLink style={{textDecoration:'none', color:'inherit'}} to='/ResourcesHomePage'>Home</NavLink></Button>
          <Button color='inherit' onClick={goBack}>Back</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
        <List>
          {/* uncomment this to make HOME, FRESHERS, WALKIN DRIVE page visible
            
            
            <NavLink style={{textDecoration:'none', color:'inherit'}} to='/Home'> 
                <ListItem key='home'  disablePadding sx={{ display: 'block' }}>
                
                <ListItemButton>
                <ListItemIcon><AutoAwesomeMosaicIcon /> </ListItemIcon>
                <ListItemText primary='Home'/>
                </ListItemButton>        
                </ListItem>
            </NavLink>  
            <NavLink style={{textDecoration:'none', color:'inherit'}} to='/Internships'> 
                <ListItem key='home'  disablePadding sx={{ display: 'block' }}>
                
                <ListItemButton>
                <ListItemIcon><EventNoteIcon /> </ListItemIcon>
                <ListItemText primary='Internships'/>
                </ListItemButton>        
                </ListItem>
            </NavLink> 

            <NavLink style={{textDecoration:'none', color:'inherit'}} to='/FreshersJobsList'> 
                <ListItem key='home'  disablePadding sx={{ display: 'block' }}>
                
                <ListItemButton>
                <ListItemIcon><EventNoteIcon /> </ListItemIcon>
                <ListItemText primary='Freshers Jobs'/>
                </ListItemButton>        
                </ListItem>
            </NavLink> 

            <NavLink style={{textDecoration:'none', color:'inherit'}} to='/ExperiencedJobs'> 
                <ListItem key='home'  disablePadding sx={{ display: 'block' }}>
                
                <ListItemButton>
                <ListItemIcon><EventNoteIcon /> </ListItemIcon>
                <ListItemText primary='Referrals/Experienced Jobs'/>
                </ListItemButton>        
                </ListItem>
            </NavLink> 

            <NavLink style={{textDecoration:'none', color:'inherit'}} to='/WalkInDriveJobsList'> 
                <ListItem key='home'  disablePadding sx={{ display: 'block' }}>
                
                <ListItemButton>
                <ListItemIcon><EventNoteIcon /> </ListItemIcon>
                <ListItemText primary='Walk-In Drives'/>
                </ListItemButton>        
                </ListItem>
            </NavLink>  */}

           
        </List>
        <Divider />

        <List>
        <NavLink style={{textDecoration:'none', color:'inherit'}} to='/ReferenceBooks'> 
                <ListItem key='home'  disablePadding sx={{ display: 'block' }}>
                
                <ListItemButton>
                <ListItemIcon><EventNoteIcon /> </ListItemIcon>
                <ListItemText primary='Reference Books'/>
                </ListItemButton>        
                </ListItem>
            </NavLink> 
        </List>

        <List>
        <NavLink style={{textDecoration:'none', color:'inherit'}} to='/ResourcesHomePage'> 
                <ListItem key='home'  disablePadding sx={{ display: 'block' }}>
                
                <ListItemButton>
                <ListItemIcon><EventNoteIcon /> </ListItemIcon>
                <ListItemText primary='Programming Resources'/>
                </ListItemButton>        
                </ListItem>
            </NavLink> 
        </List>

      </Drawer>


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2,color:'red' }}>
        Site is in development phase. Please open in Desktop for better view
        </Typography>
      </Box>
    </Box>
  );
}
