'use client';
import Image from 'next/image'
import Link from 'next/link';
import { EnvelopeSimple, FacebookLogo, GoogleLogo, LockKey, PawPrint, TwitterLogo } from 'phosphor-react'
import { useEffect, useState } from 'react';
import './style.scss'

export default function Main() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

    return (
        <main className="main-login">
            <div className="bg-login">
                <Image src={`${width <= 764 ? "/background-login-mobile.jpeg" : "/background-login-pc.jpg"}`} alt="image-background-main-dogs" quality={100} fill />
            </div>

            <section className='container-login'>
                <div className='login'>
                    <form>
                        <header className='login-header'>
                            <PawPrint size={64} />
                            <h1>Login</h1>
                        </header>

                        <div className="container-form-inputs">
                            <div className="input">
                                <EnvelopeSimple size={24} />
                                <input type="email" name="email" placeholder='Email' />
                            </div>

                            <div className="input">
                                <LockKey size={24} />
                                <input type="senha" name="senha" placeholder='Senha' />
                            </div>

                            <a href="">Esqueci a senha!</a>

                            <button type='submit'className='btn'>Login</button>

                            <div className="container-login-apps">
                                <div className="login-apps-text">
                                    <div className="traco"></div>
                                    <span>Ou logue por</span>
                                    <div className="traco"></div>
                                </div>

                                <div className="login-apps">
                                    <div className="app">
                                        <FacebookLogo size={32} className="facebook" />
                                    </div>

                                    <div className="app">
                                        <TwitterLogo size={32} className="twitter" />
                                    </div>
                                    
                                    <div className="app">
                                        <GoogleLogo size={32} className="google" />
                                    </div>
                                </div>
                            </div>

                            <span className='register'>Não tem conta? <Link href="/cadastro">Cadastre-se</Link></span>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )

    function handleWindowResize(){
        setWidth(window.innerWidth)
    }
}