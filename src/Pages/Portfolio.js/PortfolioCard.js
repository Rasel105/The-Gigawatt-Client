import React from 'react';


const PortfolioCard = ({ port }) => {
    const { name, experience, img } = port;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-16 rounded-xl">
                        <img src={img} alt="" />
                    </div>
                </div>
                <h2 className="card-title">{name}</h2>
                <p className=''>{experience}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;