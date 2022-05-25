import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile pt-20">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-primary text-center'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56  text-base-content">
                    <li className='mb-1'><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addareview">Add A Review</Link></li>
                    {admin ? <li><Link to="/dashboard/myprofile">My Profile</Link></li> : <li><Link to="/dashboard/myprofile">My Profile</Link></li>}
                    {admin && <>
                        <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                        <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                        <li><Link to="/dashboard/manage-products">Manage Product </Link></li>
                        <li><Link to="/dashboard/manage-all-orders">Manage All Orders</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;