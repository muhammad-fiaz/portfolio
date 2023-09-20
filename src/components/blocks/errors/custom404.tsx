import React from "react";
import {useRouter} from "next/router";
import {Player} from "@lottiefiles/react-lottie-player";

function Custom404() {
    const router = useRouter();

    const handleGoBack = () => {
        router.push("/");
    };

    return (
        <div className="image404">


            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <div className="centered-image404">
                <Player
                    autoplay
                    loop
                    src="/lottie/boysearching.json"
                    style={{
                        width: "50%",
                        height: "50%",
                        maxWidth: "800px",
                        maxHeight: "800px",
                    }}
                />
                <h1 className="not-found-title404">404 - Page Not Found</h1>
                <p className="not-found-text404">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Oops! It seems like you've stumbled upon a non-existent page on my
                    portfolio website.
                </p>
                <p style={{ fontSize: '14px' }}>
                    If you think this issues or bugs, please report them{' '}
                    <a href="https://github.com/muhammad-fiaz/portfolio/issues/new">@muhammad-fiaz</a>
                </p>
                <button className="go-back-button404" onClick={handleGoBack}>
                    Go Back to Homepage
                </button>
            </div>
            <div className="anim">
                <div className="ufo">
                    <Player
                        autoplay
                        loop
                        src="/lottie/ufo.json"
                        style={{
                            width: "80px",
                            height: "80px",
                        }}
                    />
                </div>
                <div className="ghost">
                    <Player
                        autoplay
                        loop
                        src="/lottie/ghost.json"
                        style={{
                            width: "80px",
                            height: "80px",
                        }}
                    />
                </div>

            </div>

        </div>
    );
}

export default Custom404;
