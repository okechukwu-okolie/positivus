import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Footer from './static/Footer'
import Header from './static/Header'
import Home from './pages/Home';

function App() {
 

  return (
    <BrowserRouter>
     
        <Header/>
            <Routes>
            <Route path="/" element={<Home/>} />

            </Routes>
        <Footer/>
      

    </BrowserRouter>
  )
}

export default App
