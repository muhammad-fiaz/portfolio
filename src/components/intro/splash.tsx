import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="centered-image">
                <Player
                    autoplay
                    loop
                    src="/lottie/laptop.json"
                    style={{
                        width: "80%",
                        height: "80%",
                        maxWidth: "800px",
                        maxHeight: "800px",
                    }}
                />
            </div>
            <div className="bottom-right-image">
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
        </div>
    );
}

export default LoadingScreen;
