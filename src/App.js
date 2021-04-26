
import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar'
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      <Navbar/>
      <InfoCard/>
    </div>
  );
}

export default App;
