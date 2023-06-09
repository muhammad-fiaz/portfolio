import React from 'react';

import Navbar from "../home/Navbar";
import Notice from "../dev/status";

const Services: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <h3>Services</h3>
            <Notice/>
        </div>
    );
};

export default Services;
