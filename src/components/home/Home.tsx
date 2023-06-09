import React from 'react';
import Notice from './../dev/status';
import Navbar from './../home/Navbar';
import './../../assets/css/splash.css';

function Home() {

    return (
        <div className="app-container">

                    <Navbar />
                    <Notice />
                </div>

    );
}

export default Home;
