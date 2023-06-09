import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import LoadingScreen from "./components/splash/splash";

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        };

        handleLoad(); // Call the handleLoad function immediately

        return () => {
            // Clean up any event listeners or timers if needed
        };
    }, []);

    return (
        <div className="app-container">
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="services" element={<Services />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="*" element={<Navigate to="/404" />} />
                        </Routes>
                    </Router>
                </div>
            )}
        </div>
    );
};

export default App;
