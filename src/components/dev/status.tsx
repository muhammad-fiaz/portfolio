import React, {useEffect, useState} from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import HCaptcha from '@hcaptcha/react-hcaptcha';


{/* notice */}
const DevelopmentNotice: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);

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

    const handleVerify = (token: string) => {
        // Verification logic here
        if (token) {
            setIsVerified(true);
        }
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
                    src="/lottie/codingdev.json"
                    style={{ marginBottom: '20px', width: '300px', height: '300px' }}
                />
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                    This site is still in Active development.
                </p>
                <p style={{ fontSize: '14px', marginBottom: '30px' }}>
                    If you encounter any issues or bugs, please report them{' '}
                    <a href="https://github.com/muhammad-fiaz/portfolio/issues/new">@muhammad-fiaz</a>
                </p>
                {!isVerified ? (
                    <>
                        <HCaptcha
                            sitekey="d27bf471-6339-4603-b63f-5ab5fdd96ace"
                            onVerify={handleVerify}
                        />
                        <p style={{ fontSize: '12px', color: 'red', marginBottom: '10px' }}>
                            Please complete the verification.
                        </p>
                    </>
                ) : null}
                <button
                    onClick={handleHidePopup}
                    disabled={!isVerified}
                    style={{
                        background: 'linear-gradient(to right, #7b68ee, #b22cff)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginTop: '10px',
                    }}
                >
                    I understand
                </button>
            </div>
        </div>
    );
};

export default DevelopmentNotice;
