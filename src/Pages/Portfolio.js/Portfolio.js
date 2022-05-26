import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => {
                setPortfolio(data);
            })
    }, [])
    console.log(portfolio);
    return (
        <div className='pt-16'>
            <h1 className='text-center mb-3 text-2xl underline'>My Portfolio</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 justify-between w-9/12 mx-auto '>
                <div className='m-4'>
                    <h2 className='text-3xl font-bold'>Md. Azadul Islam Rasel</h2>
                    <p className='text-xl'>Web Developer</p>
                    <p className='text-lg'>Education: Dhaka Polytechnic Institute</p>
                </div>
                <div className='m-4'>
                    <p className='text-xl'>Email: azad.is.rasel@gmail.com</p>
                    <p className='tex-lg'>Phone: +88 01575068398</p>
                    <p className=''><span>Github</span>: <a href="https://github.com/Rasel105"><span className='text-green-200'>Explore</span></a></p>
                </div>
            </div>
            <div className='px-10'>
                <h1 className='text-3xl text-center my-10'>Skills</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 my-10'>
                    {
                        portfolio.map(port => <PortfolioCard
                            port={port}
                            key={port._id}
                        />)
                    }
                </div>
                <div className='my-10'>
                    <h1 className='text-3xl text-center my-10'>Project</h1>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Megaventory</h2>
                                <p className='text-primary'><a href="https://assignment-0011.web.app/">Click to Expore</a></p>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">UDreamDental</h2>
                                <p className='text-primary'><a href="https://assignment-0010.web.app/">Click to Expore</a></p>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">The Gigawatt </h2>
                                <p className='text-primary'><a href="https://the-gigawatt.web.app/">Click to Expore</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        // {/* <div class="card w-1/2 bg-base-100 shadow-xl mx-auto">
        //                 <div class="card-body items-center text-center">
        //                     <h2 class="card-title text-2xl">Md. Azadul Islam Rasel</h2>
        //                     <p className='text-lg'><span className='font-bold'>Email:</span> azad.is.rasel@gmail.com</p>
        //                     <p className='text-lg'><span className='font-bold'>Education:</span>  Dhaka Polytechnic Institute</p>
        //                     <p className='text-lg'><span className='font-bold'>Department:</span>  Computer Technology</p>
        //                     <p className='text-lg'><span className='font-bold'>Skills:</span>  HTML, CSS, Bootsrap5, TailwindCSS, React, Node, MonogDB</p>
        //                     <p className='text-secondary text-lg'><span className='font-bold'>Project Link:</span> </p>
        //                     <p className='text-lg'><span className='font-bold'>Megaventory:</span>  https://assignment-0011.web.app/</p>
        //                     <p className='text-lg'><span className='font-bold'>UDreamDental:</span>  https://assignment-0010.web.app/</p>
        //                     <p className='text-lg'><span className='font-bold'>The Gigawatt:</span>  https://the-gigawatt.web.app/</p>
        //                 </div>
        //             </div> */}
    );
};

export default Portfolio;
