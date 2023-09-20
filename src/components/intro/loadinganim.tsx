import React, { useState, useEffect } from 'react';

import { Player } from "@lottiefiles/react-lottie-player";

export default function LoadingAnim() {
    // Use a state variable to track whether components are loaded
    const [componentsLoaded, setComponentsLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading the component by using a timeout
        const timeout = setTimeout(() => {
            // Set componentsLoaded to true after the timeout
            setComponentsLoaded(true);
        }, 0); // Change the delay to 0 to simulate component loading

        // Clean up the timeout if the component unmounts
        return () => clearTimeout(timeout);
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
                        src="/lottie/serverboot.json"
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
                            src="/lottie/loadcode.json"
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
