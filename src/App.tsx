import React, { useState, useEffect } from 'react';
import './App.css';
import Notice from "./components/dev/status";
import Navbar from "./components/home/Navbar";
import LoadingScreen from "./components/splash/splash";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const minimumDuration = 3000; // Minimum duration in milliseconds
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(minimumDuration - elapsedTime, 0);
            setTimeout(() => {
                setIsLoading(false);
                setIsInitialLoad(false);
            }, remainingTime);
        };

        const handle404Error = () => {
            setIsLoading(false);
            setIsInitialLoad(false);
        };

        window.addEventListener('load', handleLoad);
        window.addEventListener('error', handle404Error);

        return () => {
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('error', handle404Error);
        };
    }, []);

    return (
        <div className="app-container">
            {isLoading && isInitialLoad ? (
                <LoadingScreen />
            ) : (
                <div>
                    <Navbar />
                    <Notice />
                </div>
            )}
        </div>
    );
}

export default App;