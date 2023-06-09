import React from 'react';
import Navbar from "../home/Navbar";
import Notice from "../dev/status";


const Contacts: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <h3>Contact</h3>
<Notice/>
        </div>
    );
};

export default Contacts;
