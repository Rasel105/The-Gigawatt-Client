import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={<Purchase />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
