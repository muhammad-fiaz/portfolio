
import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ConfettiComponent from './../intro/confetti';
import { checkForUpdates, VersionDetails } from './checkforupdates';
import settings from '../../../src/content/_settings.json';

const DevelopmentNotice: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [hasShownConfetti, setHasShownConfetti] = useState<boolean>(false);
    const [versionDetails, setVersionDetails] = useState<VersionDetails | null>(null);
    const [autoupdatecheck, setAutoupdatecheck] = useState<boolean | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch autoupdatecheck from the JSON file
            const jsonAutoupdatecheck = settings?.autoupdatecheck || false;
            setAutoupdatecheck(jsonAutoupdatecheck);

            if (jsonAutoupdatecheck) {
                // Fetch version details only if autoupdatecheck is true
                const details = await checkForUpdates();
                setVersionDetails(details);
            }

            const hasSeenNotice = localStorage.getItem('developmentNotice');
            if (!hasSeenNotice) {
                setShowPopup(true);
            }
        };

        fetchData();
    }, []);

    const handleHidePopup = () => {
        localStorage.setItem('developmentNotice', 'true');
        setShowPopup(false);
        setHasShownConfetti(true);
    };

    const handleVerify = (token: string) => {
        if (token) {
            setIsVerified(true);
        }
    };

    if (!showPopup) {
        return (
            <>
                {hasShownConfetti && isVerified && <ConfettiComponent />}
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
                        Thank you for visiting my portfolio!👻
                    </p>
                    <p style={{ fontSize: '14px', marginBottom: '30px' }}>
                        If you encounter any issues or bugs, please report them{' '}
                        <a href="https://github.com/muhammad-fiaz/portfolio/issues/new">@muhammad-fiaz</a>
                    </p>
                    {!isVerified ? (
                        <>
                            <div style={{ marginBottom: '10px', marginLeft: '20px' }}>
                                <HCaptcha
                                    sitekey="d27bf471-6339-4603-b63f-5ab5fdd96ace"
                                    onVerify={handleVerify}
                                />
                            </div>
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
                {autoupdatecheck && ( // Render version details only if autoupdatecheck is true
                    <div
                        style={{
                            marginTop: '10px',
                            fontSize: '12px',
                            position: 'fixed',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            textAlign: 'center',
                            padding: '10px',
                        }}
                    >
                        <p>
                            Current Version:{' '}
                            {versionDetails ? (
                                <a
                                    href={`https://github.com/muhammad-fiaz/portfolio/releases/tag/v${versionDetails.currentVersion}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {versionDetails.currentVersion}
                                </a>
                            ) : 'Loading...'}{' '}
                            -{' '}
                            {versionDetails && versionDetails.isLatestVersion ? (
                                'Everything is up to date!👻'
                            ) : (
                                <>
                                    {versionDetails ? (
                                        <a
                                            href={versionDetails.releasesUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            New Version {versionDetails.latestVersion} available🎉
                                        </a>
                                    ) : 'Checking for updates...'}
                                </>
                            )}
                        </p>
                    </div>
                )}
            </div>
            {hasShownConfetti && isVerified && <ConfettiComponent />}
        </div>
    );
};

export default DevelopmentNotice;