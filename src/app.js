import react from "react";
import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/ProjectSection/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
