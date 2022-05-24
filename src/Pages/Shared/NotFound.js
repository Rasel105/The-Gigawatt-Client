import React from 'react';
import { Link } from 'react-router-dom';
import Notfound from '../../assets/notfound.jpg'

const NotFound = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-24'>
            <img src={Notfound} alt="" />
            <div className='flex flex-col justify-center items-center p-4'>
                <h1 className='text-error text-7xl mb-2'>Ooops.</h1>
                <p className='text-2xl text-sky-400 mb-3 text-center'>The page you were looking for was not found.</p>
                <Link className='btn btn-success text-white' to="/">Back to Home page</Link>
            </div>
        </div>
    );
};

export default NotFound;