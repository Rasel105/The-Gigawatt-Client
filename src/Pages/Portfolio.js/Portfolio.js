import React, { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import Bounce from 'react-reveal/Bounce';
const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => {
                setPortfolio(data);
            })
    }, [])

    return (
        <div className='pt-20'>
            <h1 className='text-center mb-3 text-2xl underline'>My Portfolio</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 justify-between w-9/12 mx-auto '>
                <div className='m-4'>
                    <h2 className='text-3xl font-bold'>Md. Azadul Islam Rasel</h2>
                    <p className='text-xl'>Web Developer</p>
                    <p className='text-lg'>Education: Diploma in Engineering (Computer Technology)</p>
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
                            key={port._id}
                            port={port} 
                        />)
                    }

                </div>

                <Bounce left cascade>
                    <div className='my-10'>
                        <h1 className='text-3xl text-center my-10'>Project</h1>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Megaventory</h2>
                                    <p className='text-primary'><a href="https://assignment-0011.web.app/">Click to Expore</a></p>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">UDreamDental</h2>
                                    <p className='text-primary'><a href="https://assignment-0010.web.app/">Click to Expore</a></p>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">The Gigawatt </h2>
                                    <p className='text-primary'><a href="https://the-gigawatt.web.app/">Click to Expore</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>
    );
};

export default Portfolio;
