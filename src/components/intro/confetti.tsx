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
import Confetti from 'react-dom-confetti';

const ConfettiComponent = () => {
    const [confettiActive, setConfettiActive] = useState(false);

    useEffect(() => {
        // Set confettiActive to true after a delay to trigger the confetti animation
        const delay = setTimeout(() => {
            setConfettiActive(true);
        }, 1000);

        // Cleanup timeout on component unmount
        return () => clearTimeout(delay);
    }, []);

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: '10px',
        height: '10px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };

    const confettiContainerStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
    };

    return (
        <div style={confettiContainerStyle}>
            <Confetti active={confettiActive} config={config} />
        </div>
    );
};

export default ConfettiComponent;
