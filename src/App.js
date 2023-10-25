import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Payment from './components/Payment';
import SignUpPage from './routes/SignUpPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BookNowTemplate from './components/BookNow';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path ="/" element ={<SignIn/>}/>
        <Route path ="/signup" element ={<SignUp/>}/>

        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/home' element={<Home />} /> {/* Sign Up route */}
        <Route path='/home' element={<Home />} /> {/* Default route */}
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<BookNowTemplate/>} />

      </Routes>
    </div>
  );
}

export default App;
