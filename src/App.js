import logo from './logo.svg';
import './App.css';
import SignUp from './Component/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './Component/LogIn';
import TimerHomePage from './Component/TimerHomePage';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/' element={<LogIn/>}></Route>
      <Route path='/TimerHomePage'  element={<TimerHomePage/>}></Route>
    </Routes>
   </BrowserRouter>
    
   </>
  );
}

export default App;
