import React, { useState, useEffect } from 'react';

import { Player } from "@lottiefiles/react-lottie-player";
import serverboot from "../../../assets/lottie/serverboot.json";
import image2 from "../../../assets/lottie/loadcode.json";

export default function LoadingAnim() {
    // Use a state variable to track whether components are loaded
    const [componentsLoaded, setComponentsLoaded] = useState(false);

    // Simulate a loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setComponentsLoaded(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (

                <div
                    style={{
                        position: 'relative', // Add relative positioning
                        display: 'flex',
                        flexDirection: 'column', // Stack elements vertically
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <Player
                        className="loading-anim-player"
                        autoplay
                        loop
                        src={serverboot}
                        style={{
                            width: "80%", // Increase width
                            height: "80%", // Increase height

                            position: 'relative', // Add relative positioning
                        }}
                    />
                    <div className="loading-code-image">
                        <Player
                            autoplay
                            loop
                            src={image2}
                            style={{
                                width: "80px",
                                height: "80px",
                            }}
                        />
                    </div>
                    <p
                        className='loading-text-resp'

                    >
                        Preparing your experience...
                    </p>
                </div>

    );
}
