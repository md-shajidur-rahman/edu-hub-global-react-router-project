import React, { useEffect, useState } from 'react';
import './UkUniversities.css';

const UkUniversities = () => {
    const [universities, setUniversities] = useState([]);

    useEffect ( () => {
        fetch('./universityInfo.json')
        .then(res => res.json())
        .then(data => setUniversities(data));
    }, []);

    return (
        <div className="mb-5 pb-5">
             <h2>Best UK Universities</h2>
             <div className="universities">
                <div className="row">
                    {
                        universities.map((university) => (
                            <div className="col-md-4">
                                <div className="cart">
                                    <div className="university-logo">
                                        <img className="w-50 img-size" src={university.img} alt="" />
                                    </div>
                                    <h3>{university.name}</h3>
                                    <p>Description: {university.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
             </div>
        </div>
    );
};

export default UkUniversities;