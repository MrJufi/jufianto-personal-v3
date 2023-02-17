import './App.css';
import 'animate.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import {Routes, Route, HashRouter} from 'react-router-dom';


function App() {
  return (
    <>
    <HashRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>} />
          <Route path="/portfolio" element={ <Portfolio/>} />  
        </Routes>
      <Footer/>
    </HashRouter>
    </>
  );
}

export default App;
