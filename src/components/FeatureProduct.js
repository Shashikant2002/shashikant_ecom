import React from 'react';
import { Link } from "react-router-dom";

const FeatureProduct = ({data, i}) => {
    return (
        <Link to="/">
            <div className="prod_card">
                <div className="img">
                    <img    
                        src={data.image}
                        alt={data.name}
                    />
                </div>
                <h3>{data.name}</h3>
                <p>{data.description.slice(0, 100)}...</p>
                <button className='borderBtn'>View More</button>
            </div>
        </Link>
    )
}

export default FeatureProduct