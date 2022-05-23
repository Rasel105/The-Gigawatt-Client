import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row mt-20">
                <div>   
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-md rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;