import React, { useState, useEffect } from 'react';
import './App.css';
import Notice from "./components/dev/status";
import Navbar from "./components/home/Navbar";
import LoadingScreen from "./components/splash/splash";
function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const minimumDuration = 3000; // Minimum duration in milliseconds
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(minimumDuration - elapsedTime, 0);
            setTimeout(() => {
                setIsLoading(false);
            }, remainingTime);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className="app-container">
            {isLoading ? (
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
