import './App.css';
import Landing from './components/Landing.js'
import Bg from './components/Bg.js'
import { useEffect, useState, } from 'react'
import Project from './components/project.js'
import './scrollbarCSS.css'
import About from './components/about.js'
import {Footer} from './components/footer.js'
import  Skills  from './components/skills.js'
import Overlay from "./components/overlay.js"

function App() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

let wWidth = window.innerWidth

const [display, setDisplay] = useState(0)

const [nDis, setnDis] = useState(false)

function handleResize() {
wWidth = window.innerWidth
setDisplay(wWidth)
}

function handlenDis() {
setnDis(!nDis)
console.log(nDis)
}

window.addEventListener('resize', handleResize)

useEffect(()=> {
  handleResize()
})

  return (
    <div className="App">
      <Bg />
      {nDis === true ? <Overlay nDisHandler={handlenDis}/> : null}
      <Landing display={display} nDisHandler={handlenDis} nDisState={nDis}/>
      <About />
      <Skills display={display}/>
      <Project display={display}/>
      <Footer />
    </div>
  );
}

export default App;
