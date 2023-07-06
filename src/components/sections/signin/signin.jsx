import Image from 'next/image';
import Section from '../../structure/section';
import Container from '../../structure/container';
import about from '../../../../assets/styles/scss/sections/index/about.module.scss';

export default function Auth() {
    return (
        <Section classProp={`${about.section} borderBottom`} >
            <Container spacing={['verticalXXXLrg']}>
                <section className={`${about.content} ${about.container}`} >
                    <div className={about.copy}>
                        <div className={about.container} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <form style={{ margin: '0 auto', maxWidth: '300px' }}>
                                {/* Email input */}
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
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
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
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
                                        type="submit"
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
                            <div  style={{ textAlign: 'center', marginBottom: '10px' }}>
                                OR
                            </div>
                            {/* Sign-in with icons */}
                            <div  style={{ justifyContent: 'center' }}>
                                <div>
                                    <span >Sign in with:</span>
                                    <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                                        <div style={{ border: '2px solid rgba(0, 0, 0, 0.3)', borderRadius: '50%', padding: '2px', backgroundColor: 'white', width: '34px', height: '34px' }}>
                                            <div style={{ borderRadius: '50%', padding: '4px', backgroundColor: 'white', width: '100%', height: '100%' }}>
                                                <Image src="/img/google_icon.png" alt="Google" width={34} height={34} />
                                            </div>
                                        </div>
                                        <div style={{ border: '2px solid rgba(0, 0, 0, 0.3)', borderRadius: '50%', padding: '2px', backgroundColor: 'white', width: '34px', height: '34px' }}>
                                            <div style={{ borderRadius: '50%', padding: '4px', backgroundColor: 'white', width: '100%', height: '100%' }}>
                                                <Image src="/img/github_icon.png" alt="Github" width={34} height={34} />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Data string background image */}
                    <div className={`${about.image} ${about.technicalSvg}`} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src="/img/dataism-24.svg" width={477} height={1111} alt="data string background" />
                    </div>
                </section>
            </Container>
        </Section>
    );
}
