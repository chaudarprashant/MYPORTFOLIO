import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import './Home.css'
import Resume from '../../assets/docs/ResumeF.pdf'
import Typewriter from 'typewriter-effect';
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";

const Home = () => {
   const [theme,setTheme] = useTheme()

   //handle theme
   const handleTheme = () =>{
      setTheme((prevState)=>(prevState ==='light'?'dark':'light'));
   };

  return (
    <div className='container-fluid home-container' id='home'>
      <div className='theme-btn' onClick={handleTheme}>
       {theme ==='light'?(< FaMoon size={30}/>):(<FaSun size={30}/>)}
      </div>
        <div className='container home-content'>
          <h2>Hi 🙌 I`am</h2>
          <h1>
          <Typewriter options ={ {
  strings: ['Full stack developer !', 'MERN stack develper !','REACT JS  developer !'],
  autoStart: true,
  loop:true,
}}
 />
 </h1>
 <div className='home-buttons'>
  <a className='btn btn-hire' href="http://api.whatsapp.com/send?phone=7057242892" rel='noreferrer' target='_blank'>Hire me</a>
  <a className = 'btn btn-cv' href={Resume} download="ResumeF.pdf">My Resume</a>

 </div>

        </div>
    </div>
  )
}

export default Home
