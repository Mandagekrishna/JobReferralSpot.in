
import Introduction from "./Introduction"
import MiniCard from "./MiniCardMui"
import style from '../../Styles/App.module.css'
import AdHome from "./AdHome"
import Footer from "./Footer"


import Stack from '@mui/material/Stack';

export default function Home(){
    return(
        <>
         
           
            
                        <Stack spacing={2}>                               
                            <Introduction></Introduction>
                       
                            <MiniCard></MiniCard>
                           
                            {/* <AdHome></AdHome> */}
                         
                            <Footer></Footer>
                         </Stack>
           
        </>
    )
}