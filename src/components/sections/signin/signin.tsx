import React, {useState} from 'react';
import Image from 'next/image';
import Section from '../../structure/section';
import Container from '../../structure/container';
import signin from '../../../../assets/styles/scss/sections/index/about.module.scss';
import {useRouter} from 'next/router';
import Cookies from 'js-cookie'; // Import the js-cookie library
import axios from 'axios'; // Import axios

export default function Auth() {
    const serverURL = 'http://localhost:8000/api/auth/'; // replace with your server URL

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
// to prevent the data breach from happening,
// you can use any encryption method to encrypt the password and then send it to the server
        try {
            const response = await axios.post(serverURL, {
                email,
                password,
            });

            if (response.status === 200) {
                // Authentication successful
                // Store email and password in cookies
                Cookies.set('email', email);
                Cookies.set('password', password);

                // Redirect to the home page
                await router.push('/');
            } else {
                // Authentication failed
                console.log('Authentication failed');
            }
        } catch (error) {
            // Handle error
            // @ts-ignore
            console.log('Error:', error.message);
        }
    };

    return (
        <Section classProp={`${signin.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <section className={`${signin.content} ${signin.container}`}>
                    <div className={signin.copy}>
                        <div
                            className={signin.container}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <form
                                style={{ margin: '0 auto', maxWidth: '300px' }}
                                onSubmit={handleFormSubmit}
                                method='POST'
                            >
                                {/* Email input */}
                                <div
                                    style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}
                                >
                                    <label htmlFor='email'>Email:</label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            padding: '8px',
                                            borderRadius: '10px',
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                        }}
                                    />
                                </div>
                                {/* Password input */}
                                <div
                                    style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}
                                >
                                    <label htmlFor='password'>Password:</label>
                                    <input
                                        type='password'
                                        id='password'
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            padding: '8px',
                                            borderRadius: '10px',
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                        }}
                                    />
                                </div>
                                {/* Submit button */}
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button
                                        type='submit'
                                        style={{
                                            backgroundColor: 'var(--neon-2-2)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            padding: '8px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            {/* OR text */}
                            <div style={{ textAlign: 'center', marginBottom: '10px' }}>OR</div>
                            {/* Sign-in with icons */}
                            <div style={{ justifyContent: 'center' }}>
                                <div>
                                    <span>Sign in with:</span>
                                    <div
                                        style={{ display: 'flex', gap: '30px', marginTop: '20px' }}
                                    >
                                        <div
                                            style={{
                                                border: '2px solid rgba(0, 0, 0, 0.3)',
                                                borderRadius: '50%',
                                                padding: '2px',
                                                backgroundColor: 'white',
                                                width: '34px',
                                                height: '34px',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    borderRadius: '50%',
                                                    padding: '4px',
                                                    backgroundColor: 'white',
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            >
                                                <Image
                                                    src='/img/google_icon.png'
                                                    alt='Google'
                                                    width={34}
                                                    height={34}
                                                />
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                border: '2px solid rgba(0, 0, 0, 0.3)',
                                                borderRadius: '50%',
                                                padding: '2px',
                                                backgroundColor: 'white',
                                                width: '34px',
                                                height: '34px',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    borderRadius: '50%',
                                                    padding: '4px',
                                                    backgroundColor: 'white',
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            >
                                                <Image
                                                    src='/img/github_icon.png'
                                                    alt='Github'
                                                    width={34}
                                                    height={34}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </Container>
        </Section>
    );
}
