
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactDom from 'react-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Board from "./Pages/Editorial"
import Publication from "./Pages/Publication"
import Editorial from './Pages/Editorial';
import Current from './Pages/Current';
import ARCHIVES from './Pages/Archiver';
import Copyright from './Pages/Copyright';
import Search from './Pages/Search';
import CONTACT from "./Pages/Contact"
import News from './Pages/News';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Vol from './Pages/Vol';
import Clinical from './Componenets/Clinical/Clinical';
import Trail from './Pages/Trail';
import Paper from './Pages/Paper';
import Author from "./Pages/Author"
import Authors from './Pages/Authors';
import Charge from './Pages/Charge';
import Analytics from './Pages/Analytics';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route 
            path="/" 
            element={<Home/>} 
            />
            <Route 
            path="/about" 
            element={<About/>} 
            />
            <Route 
            path="/editorial" 
            element={<Editorial/>} 
            />
             <Route 
            path="/publication" 
            element={<Publication/>} 
            />
            <Route 
            path="/current" 
            element={<Current/>} 
            />
            <Route 
            path="/achives" 
            element={<ARCHIVES/>} 
            />
             <Route 
            path="/copy" 
            element={<Copyright/>} 
            />
             <Route 
            path="/search" 
            element={<Search/>} 
            /> 
            <Route 
            path="/contact" 
            element={<CONTACT/>} 
            /> 
            <Route 
            path="/news" 
            element={<News/>} 
            /> 
             <Route 
            path="/Clinical" 
            element={<Clinical/>} 
            />
            <Route 
            path="/register" 
            element={<Register/>} 
            />
             <Route 
            path="/login" 
            element={<Login/>} 
            />
             <Route 
            path="/Vol" 
            element={<Vol/>} 
            />
            <Route 
            path="/trail" 
            element={<Trail/>} 
            />
            <Route 
            path="/submission" 
            element={<Paper/>} 
            />
            <Route 
            path="/guide" 
            element={<Author/>} 
            />
            <Route 
            path="/authors" 
            element={<Authors/>} 
            />
            <Route 
            path="/article" 
            element={<Charge/>} 
            />
            <Route 
            path="/analytics" 
            element={<Analytics/>} 
            />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
