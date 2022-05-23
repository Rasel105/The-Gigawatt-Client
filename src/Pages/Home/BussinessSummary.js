import React from 'react';
import { FcPositiveDynamic, FcSupport } from "react-icons/fc";
import { VscOpenPreview } from 'react-icons/vsc';

const BussinessSummary = () => {
    return (
        <section className='w-9/12 mx-auto my-16'>
            <h2 className='text-4xl text-center text-secondary'>This is Bussiness Summary</h2>
            <h2 className='text-2xl text-center mb-5'>Try to understand user expectaion</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 justify-items-center items-center'>
                <div className='flex flex-col items-center bg-slate-200 p-7 rounded-3xl'>
                    <FcPositiveDynamic size={100} />
                    <h2 className='text-5xl'>120M+</h2>
                    <h2 className='text-3xl'>Annual revenue</h2>
                </div>
                <div className='flex flex-col items-center bg-slate-200 p-7 rounded-3xl'>
                    <VscOpenPreview size={100} />
                    <h2 className='text-5xl'>33K+</h2>
                    <p className='text-3xl'>Customer Reviews</p>
                </div>
                <div className='flex flex-col items-center bg-slate-200 p-7 rounded-3xl'>
                    <FcSupport color='green' size={100}/>
                    <h2 className='text-5xl'>50+</h2>
                    <h2 className='text-3xl'>Tools / Prouducts</h2>
                </div>
            </div>
        </section>
    );
};

export default BussinessSummary;