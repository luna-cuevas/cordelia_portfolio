import react from "react";
import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/ProjectSection/Projects'
import Videos from './components/Videos/Videos'
import Pinterest from './components/Pinterest/Pinterest'
import Contact from './components/Contact/Contact'
import ToTopButton from "./components/ToTopButton/ToTopButton";
// import './components/misc./groovin.ttf'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/react-modal-video/scss/modal-video.scss";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch> 
          <Route exact path='/' >
            <Hero />
            <About />
            <Projects />
            <Contact />
          </Route>
          <Route exact path='/videos' >
            <Videos />
          </Route>  
          <Route exact path='/pinterest' >
            <Pinterest />
          </Route>
        </Switch>
        <ToTopButton />
      </div>
    </Router>
  );
}

export default App;
