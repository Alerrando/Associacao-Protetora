'use client';
import Image from 'next/image'
import { PawPrint } from 'phosphor-react'
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
                <header className='login-header'>
                    <PawPrint size={64} />
                    <h1>Login</h1>
                </header>

                <form>

                </form>
            </section>
        </main>
    )

    function handleWindowResize(){
        setWidth(window.innerWidth)
    }
}