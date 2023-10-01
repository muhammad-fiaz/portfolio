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
