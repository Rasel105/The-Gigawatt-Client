import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAReview from './Pages/Dashboard/AddAReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Pages/Shared/NotFound';
import Blogs from './Pages/Home/Blogs';
import Payment from './Pages/Dashboard/Payment';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import Portfolio from './Pages/Portfolio.js/Portfolio';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='addareview' element={<AddAReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
          <Route path='makeadmin' element={<MakeAdmin />}></Route>
          <Route path='addproduct' element={<AddAProduct />}></Route>
          <Route path='manage-products' element={<ManageProducts />}></Route>
          <Route path='manage-all-orders' element={<ManageAllOrders />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
