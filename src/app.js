import react from "react";
import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/ProjectSection/Projects'
import Videos from './Videos/Videos'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/react-modal-video/css/modal-video.css";

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
        </Route>
        <Route exact path='/videos' >
          <Videos />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
