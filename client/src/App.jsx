import Layout from "./components/Layout/Layout"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Education from "./pages/Educations/Education"
import Projects from "./pages/Projects/Projects"
import TechStack from "./pages/TechStack/TechStack"
import WorkExp from "./pages/workExp/WorkExp"
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext"
import MobileNav from "./components/MobileNav/MobileNav"

function App() {
    const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
      <MobileNav/>
      <Layout/>
     <div className="container">
     <About/>
     <Education/>
     <TechStack/>
     <Projects/>
     <WorkExp/>
     <Contact/>
     </div>
     <ScrollToTop 
     smooth 
      color="#f29f67"
      style={{backgroundColor:'#1e1e2c',borderRadius:"80px"}} />

     </div>
    </>
  )
}

export default App
