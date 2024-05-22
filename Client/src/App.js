import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar.js';
import { Home } from './components/pages';
import VerifyNews from './components/pages/VerifyNews.js';
import Contact from './components/pages/Contact.js'
import About from './components/pages/About.js'
import Login from './components/pages/Login.js'
import SignUp from './components/pages/SignUp.js'
import Footer from './components/pages/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import ForgotPassword from './components/pages/ForgotPassword.js';
import MaybeShowNavBar from './components/MaybeShowNavBar/MaybeShowNavBar.js';
import { useLocation } from 'react-router-dom';






export function App() {

  return (
    <div className="App">
      <MaybeShowNavBar>
            <Navbar/>
      </MaybeShowNavBar>
     
     <Routes>
      <Route path='/home' element={< Home/>}></Route>
      <Route path='/about' element={< About/>}></Route>
      <Route path='/feedback' element={< Contact/>}></Route>
      <Route path='/verifyNews' element={< VerifyNews/>}></Route>
      <Route path='/' element={< Login/>}></Route>
      <Route path='/signup' element={< SignUp/>}></Route>
      <Route path='/forgotPassword'element={<ForgotPassword />}></Route>
     </Routes>
    </div>
 

    

    
  );
}


export default App;

































































