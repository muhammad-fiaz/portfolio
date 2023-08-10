import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Section from '../../structure/section';
import Container from '../../structure/container';
import settings from '../../../../assets/styles/scss/sections/index/about.module.scss';
import axios from 'axios';
import ThemeMode from "../../utils/theme"; // Import axios

export default function Settings() {
    const [email, setEmail] = useState('');
    const [editMode, setEditMode] = useState(false); // State to manage edit mode
    const serverURL = 'http://localhost:8000/api/auth/update_email/'; // replace with your server URL

    useEffect(() => {
        const storedEmail = Cookies.get('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const handleEditClick = () => {
        setEditMode(!editMode); // Toggle edit mode
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const saveEmail = async () => {
        try {
            // Compare the updated email with the current email
            if (email === Cookies.get('email')) {
                console.log('Email is the same, no need to update');
                setEditMode(false); // Disable edit mode if the email is the same
                return;
            }

            // Validate the updated email (You can add custom validation here if needed)
            if (!validateEmail(email)) {
                console.log('Invalid email');
                return;
            }

            // Send the updated email address to the server
            const response = await axios.post(serverURL, { email });

            // Check the server response
            if (response.status === 200) {
                // Email updated successfully
                // Update the email in the state and cookies
                Cookies.set('email', email);
                setEditMode(false); // Disable edit mode after saving
            } else {
                // Show an error message if the server response is not successful
                console.log('Error:', response.data.error);
            }
        } catch (error) {
            // Handle any error that occurred during the API call
            console.log('Error:', error.message);
        }
    };

    // Function to validate email
    const validateEmail = (email) => {
        // Use a regular expression to validate the email format
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <Section classProp={`${settings.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <section className={`${settings.content} ${settings.container}`}>
                    <div className={settings.copy}>
                        <div className={`${settings.container} ${settings.inlineContainer}`}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={settings.label}>Email:</div>
                                {editMode ? (
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className={settings.emailInput}
                                    />
                                ) : (
                                    <div className={settings.email}>{email || 'UserId'}</div>
                                )}
                                {editMode ? (
                                    <button onClick={saveEmail} className={settings.editButton}>
                                        Save
                                    </button>
                                ) : (
                                    <button onClick={handleEditClick} className={settings.editButton}>
                                        Edit
                                    </button>
                                )}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={settings.label}>
                                    <div className={settings.themelabel}>Default Theme:</div>
                                </div>
                                <div className={settings.defaultTheme}>
                                    <ThemeMode />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${settings.image} ${settings.technicalSvg}`}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Image src='/img/dataism-24.svg' width={500} height={500} alt='data string background' loading="eager"
                        />
                    </div>
                </section>
            </Container>
        </Section>
    );
}
