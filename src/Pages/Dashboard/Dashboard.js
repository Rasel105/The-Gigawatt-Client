import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile pt-20">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-primary text-center'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                    <li className='mb-1'><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addareview">Add A Review</Link></li>
                    {admin ? <li><Link to="/dashboard/myprofile">My Profile</Link></li> : <li><Link to="/dashboard/myprofile">My Profile</Link></li>}
                    {admin && <>
                        <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                        <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                        <li><Link to="/dashboard/manage-products">Manage Product </Link></li>
                        <li><Link to="/dashboard/manage">Manage</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;