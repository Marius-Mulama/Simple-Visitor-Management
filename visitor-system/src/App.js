import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home';
import Visitors from './pages/Visitors';
import NotFound from './pages/NotFound';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    // <div className="App">
    //   <Home/>
      
    // </div>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visitors" element={<Visitors/>}/>
          <Route path={"*"} element={<NotFound/>} />
        </Routes>
      {/* </div> */}
      <ToastContainer theme="dark" />
    </Router>

  );
}

export default App;
