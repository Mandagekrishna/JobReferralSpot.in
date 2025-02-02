import styles from '../../Styles/InternshipStyles/InternshipList.module.css'
import Data from '../../DATA/Internship.json';
import {useState} from 'react';
import React from 'react';
import Footer from '../HOME/Footer';
import { NavLink } from 'react-router-dom';



export default function InternshipList()
{
    let [InternshipData,updateData] = useState(Data);

    console.log(InternshipData);
    return(

 
        <>
            <div className={styles.container}>

               
               <div className={styles.element1}>
                
                    <div className={styles.element1a}>
                        <h1 style={{margin:'0px'}}>Internships</h1>
                    </div>
                        
                    <input  className={styles.element1b} type='text' placeholder='search box'/>

               </div> 



                
             {
             InternshipData.map(element => { 
                                                return( 
                                                     <div className={styles.element2}>

                                                        <div className={styles.element2card1}>  

                                                                <div className={styles.element2card11}>
                                                                    <h1>{element['position']}</h1>
                                                                    <h3>{element['companyName'] + " - " + element['location']}</h3><br/>
                                                                    <p>{}</p>
                                                                    <p>{element['positionType']}</p>
                                                                    <p>{element['salary']}</p>
                                                                 </div>

                                                                 <div className={styles.element2card23}>
                                                                    <p>Posted On : {element['addedDate']}</p>
                                                                </div>

                                                                <div className={styles.element2card12}>
                                                                    <p>{element['workMode']}</p>
                                                                    <p>{element['experienceRequired']}</p>                                                        
                                                                </div>                        
                                                                    
                                                         </div>                                            
                                                
                                                       
                                                  
                                                <div className={styles.skillscard}>
                                                   
                                                    {   Array.isArray(element.mustHaveSkills)?
                                                        element.mustHaveSkills.map((element)=>(
                                                            
                                                                <button className={styles.skills} >{element}</button>

                                                            
                                                        )):<></>
                                                    
                                                    }

                                                </div>

                                                <div className={styles.button}>
                                                  <NavLink to={`/InternshipDetailsPage/${element['id']}`}>
                                                  <button className={styles.button} >View Details  &#8594;</button>
                                                  </NavLink>  
                                                </div>

                                                 

                                                 
                                                
                                                </div>


                                            )}
                                )
            }





            <div className={styles.element3}>
                
                <div className={styles.element3card}>
                   Ad
                </div>

                <div className={styles.element3card}>
                   Ad
                </div>


            </div>


     </div>

     <Footer></Footer>
        
</>
    )
}