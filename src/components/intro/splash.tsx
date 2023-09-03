import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import image1 from "../../../assets/laptop.json";
import image2 from "../../../assets/loadcode.json";

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="centered-image">
                <Player
                    autoplay
                    loop
                    src={image1}
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
                    src={image2}
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
