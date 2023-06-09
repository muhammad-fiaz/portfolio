import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import rocketlauncher from "../../rocketlauncher.json";
import "./../../assets/css/splash.css";

function LoadingScreen() {
    const [loadingText, setLoadingText] = useState("Launching");

    useEffect(() => {
        const typingTimer = setInterval(() => {
            setLoadingText((prevText) => {
                if (prevText === "Launching...") {
                    return "Launching";
                } else {
                    return prevText + ".";
                }
            });
        }, 500);

        setTimeout(() => {
            clearInterval(typingTimer);
            setLoadingText("Launching"); // Reset the text to "Launching" after 3 seconds
        }, 3000);

        return () => {
            clearInterval(typingTimer);
        };
    }, []);

    return (
        <div className="loading-screen">
            <div className="loading-animation">
                <Player
                    autoplay
                    loop
                    src={rocketlauncher}
                    style={{ width: "80%", height: "80%", maxWidth: "800px", maxHeight: "800px" }}
                />
            </div>
            <p className="loading-text">{loadingText}</p>
        </div>
    );
}

export default LoadingScreen;
