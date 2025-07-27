import { useState } from 'react'
// import NavBar from './Components/NavBar's
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import Home from './Components/HOME/Home'
import InternshipList from './Components/INTERNSHIPS/InternshipList'
import InternshipDetailsPage from './Components/INTERNSHIPS/InternshipDetailsPage'
import JobsList from './Components/EXPERIENCED_JOBS/ExperiencedJobsListMui'
import ExperiencedJobsDetailsMui from './Components/EXPERIENCED_JOBS/ExperiencedJobsDetailsMui'
import FreshersJobsListMui from './Components/FRESHERS_JOBS/FreshersJobsListMui'
import FreshersJobsDetailsMui from './Components/FRESHERS_JOBS/FreshersJobsDetailsMui'
import WalkInDriveJobsListMui from './Components/WALK_IN_DRIVES/WalkInDriveJobsListMui'
import WalkInDriveJobsDetailsMui from './Components/WALK_IN_DRIVES/WalkInDriveJobsDetailsMui'
import InternshipListMui from './Components/INTERNSHIPS/InternshipListMui'
import InternshipDetailsPageMui from './Components/INTERNSHIPS/InternshipDetailsPageMui'
import ResourcesHomePage from './Components/PROGRAMMING_RESOURCES/ResourcesHomePage'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Analytics} from '@vercel/analytics/react';
import NavBarMui from './Components/NavBarMui'
import { ListItem,Box  } from '@mui/material'
import ReferenceBooks from './Components/GATE/ReferenceBooks'
import TestPage from './Components/TestPage'
import ResourcesPage from './Components/PROGRAMMING_RESOURCES/ResourcesHomePage'
import ResourceDetailsPage from './Components/PROGRAMMING_RESOURCES/ResourcesDetailsPage'

// import { Analytics } from '@vercel/analytics/next'

// import style from './Styles/App.module.css'
// import Introduction from './Components/Introduction'

function App() {


  const theme = createTheme({
    typography: {
      fontFamily: "Josefin Sans", // Replace with your font
    },
  });

  let [drawerStatus,updateDrawer]=useState("");

  return (

    <>
   
    <ThemeProvider theme={theme}>
    <Analytics/>
    {/* <Analytics></Analytics> */}
      <Router>
   {/* <NavBar></NavBar> */}
   {/* <NavBarCopy></NavBarCopy> */}
   <div>
    <NavBarMui updateDrawer={updateDrawer}></NavBarMui>
   </div>




    {/* <p style={{color:'red'}}> Site is in development phase. Please open in Desktop for better view</p> */}
    
       
   
                
    
  
      <Box sx={{marginLeft:{md:drawerStatus?'280px':'60px',xs:'60px'}}}>

      <Routes>
    
            <Route path='/' element={<ResourcesPage></ResourcesPage>}></Route>
            <Route path='/Home' element={<Home></Home>}></Route>
            <Route path='/Internships' element={<InternshipListMui></InternshipListMui>}></Route>
            <Route path='/InternshipDetailsPage/:id' element={<InternshipDetailsPageMui></InternshipDetailsPageMui>}></Route>

            <Route path='/ExperiencedJobs' element={<JobsList></JobsList>}></Route>
            <Route path='/ExperiencedJobsDetailsPage/:id' element={<ExperiencedJobsDetailsMui/>}></Route>

            <Route path='/WalkInDriveJobsList' element={<WalkInDriveJobsListMui/>}></Route>
            <Route path='/WalkInDriveJobsetails/:id' element={<WalkInDriveJobsDetailsMui/>}></Route>

            <Route path='/FreshersJobsList' element={<FreshersJobsListMui/>}></Route>
            <Route path='/FreshersJobsDetails/:id' element={<FreshersJobsDetailsMui/>}></Route>

            <Route path='/ReferenceBooks' element={<ReferenceBooks/>}></Route>
            <Route path='/testpage' element={<TestPage/>}></Route>

           {/* <Route path='/ResourcesHomePage' element={<ResourcesHomePage></ResourcesHomePage>}></Route> */}
           <Route path='/ResourcesHomePage' element={<ResourcesPage></ResourcesPage>}></Route>
           <Route path='/ResourceDetails/:id' element ={<ResourceDetailsPage></ResourceDetailsPage>}></Route>







            

      </Routes>  
      </Box>
  
      </Router>
     
      </ThemeProvider>
    
    </>
  )
}

export default App
