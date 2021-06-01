import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <>
      <Jumbotron />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/projects" >
          <Projects/>
        </Route>
        <Route exact path="/contact" >
          <Contact/>
          </Route>
      </Switch>
        <BottomNav/>
      </>
    </HashRouter>
  );
}

export default App;
