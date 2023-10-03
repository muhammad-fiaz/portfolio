
import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

const ConfettiComponent = () => {
    const [confettiActive, setConfettiActive] = useState(false);

    useEffect(() => {
        // Set confettiActive to true after a delay to trigger the confetti animation
        const delay = setTimeout(() => {
            setConfettiActive(true);
        }, 1000);

        // Cleanup timeout on component unmount
        return () => clearTimeout(delay);
    }, []);

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: '10px',
        height: '10px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };

    const confettiContainerStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
    };

    return (
        <div style={confettiContainerStyle}>
            <Confetti active={confettiActive} config={config} />
        </div>
    );
};

export default ConfettiComponent;
