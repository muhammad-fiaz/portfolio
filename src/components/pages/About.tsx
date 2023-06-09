import React from 'react';
import Navbar from "../home/Navbar";
import Notice from "../dev/status";
const About: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Notice />
        </div>
    );
};

export default About;
