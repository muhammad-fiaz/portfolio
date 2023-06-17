import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import image from '../../../assets/codingdev.json';

const DevelopmentNotice = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasSeenNotice = localStorage.getItem('developmentNotice');

        if (!hasSeenNotice) {
            setShowPopup(true);
        }
    }, []);

    const handleHidePopup = () => {
        localStorage.setItem('developmentNotice', 'true');
        setShowPopup(false);
    };

    if (!showPopup) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 9999,
                backdropFilter: 'blur(4px)',
            }}
        >
            <div
                style={{
                    background: 'transparent',
                    color: '#ffffff',
                    padding: '20px',
                    borderRadius: '10px',
                    maxWidth: '400px',
                    textAlign: 'center',
                }}
            >
                <Player
                    autoplay
                    loop
                    src={image}
                    style={{ marginBottom: '20px', width: '300px', height: '300px' }}
                />
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                    This site is still in Active development.
                </p>
                <p style={{ fontSize: '14px', marginBottom: '30px' }}>
                    If you encounter any issues or bugs, please report them <a href="https://github.com/muhammadfiaz.com/">@ muhammad-fiaz</a>
                </p>
                <button
                    onClick={handleHidePopup}
                    style={{
                        background: 'linear-gradient(to right, #7b68ee, #b22cff)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    I understand
                </button>
            </div>
        </div>
    );
};

export default DevelopmentNotice;
