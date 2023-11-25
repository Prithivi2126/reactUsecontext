import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Usecontext from './usecontext/Usecontext';
import Contexttable from './usecontext/Contexttable';
import Invoice from './usecontext/Invoice';
import Password from './contextapi/Password';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path='/otp' element={<Password />}></Route>
      <Route path='/usecontext' element={<Usecontext />}></Route>
  
     <Route path='/contexttable' element={<Contexttable />}></Route>
     <Route path='/invoice' element={<Invoice />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
