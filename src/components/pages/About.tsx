import React from 'react';
import Navbar from "../home/Navbar";
import Notice from "../dev/status";
const About: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h3>About</h3>
            <Notice />
        </div>
    );
};

export default About;
