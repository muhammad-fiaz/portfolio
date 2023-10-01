/*
 * Copyright (c) 2023 [Muhammad Fiaz](https://github.com/muhammad-fiaz/)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS.md OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ConfettiComponent from './../intro/confetti'; // Import your ConfettiComponent here

const DevelopmentNotice: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [hasShownConfetti, setHasShownConfetti] = useState<boolean>(false);

    useEffect(() => {
        const hasSeenNotice = localStorage.getItem('developmentNotice');

        if (!hasSeenNotice) {
            setShowPopup(true);
        }
    }, []);

    const handleHidePopup = () => {
        localStorage.setItem('developmentNotice', 'true');
        setShowPopup(false);
        setHasShownConfetti(true);
    };

    const handleVerify = (token: string) => {
        // Verification logic here
        if (token) {
            setIsVerified(true);
        }
    };

    if (!showPopup) {
        return (
            <>
                {hasShownConfetti && isVerified && <ConfettiComponent />} {/* Display confetti if the notice is not shown */}
            </>
        );
    }

    return (
        <div>
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
            {hasShownConfetti && isVerified && <ConfettiComponent />} {/* Display confetti if the verification is successful */}
        </div>
    );
};

export default DevelopmentNotice;
