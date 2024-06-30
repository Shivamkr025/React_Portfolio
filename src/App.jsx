import './App.css'
import { Element } from 'react-scroll';
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Skill from './Components/Skill/Skill'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>


      <Element name="skill">
        <Skill />
      </Element>

      <Element name="project">
        <Project />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  )
}

export default App
