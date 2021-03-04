import Header from './Components/Header'
import './App.css';
import About from './Components/About';
import Resume from './Components/Resume';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Resume/>
     <Works/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
