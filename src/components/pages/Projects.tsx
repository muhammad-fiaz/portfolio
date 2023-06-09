import React from 'react';
import Navbar from "../home/Navbar";
import Notice from "../dev/status";

const Projects: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <h3>Projects</h3>
<Notice/>
        </div>
    );
};

export default Projects;
