import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/common/Header';
// import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Aboutus from './pages/Aboutus';
import Properties from './pages/Properties';
import Payrent from './pages/Payrent';
import Machenism from './pages/Machenism';
function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="machenism" element={<Machenism />}/>
          <Route exact path="aboutus" element={<Aboutus/>}/>
          <Route exact path="properties" element={<Properties/>}/>
          <Route exact path="payrent" element={<Payrent/>}/>
          <Route exact path="login" element={<Login/>}/>
          <Route exact path="register" element={<Register/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
    </div>
  );
}

export default App;
