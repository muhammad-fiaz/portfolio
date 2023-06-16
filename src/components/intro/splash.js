import React from 'react';
import Loader from 'react-loader-spinner';

const SplashScreen = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
    );
};

export default SplashScreen;
