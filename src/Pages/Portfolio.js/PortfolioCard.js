import React from 'react';

const PortfolioCard = ({ port }) => {
    const { name, experience, img } = port;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <div class="avatar">
                    <div class="w-16 rounded-xl">
                        <img src={img} alt="" />
                    </div>
                </div>
                <h2 class="card-title">{name}</h2>
                <p className=''>{experience}</p>
            </div>
        </div>

    );
};

export default PortfolioCard;