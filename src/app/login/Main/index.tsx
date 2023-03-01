'use client';
import Image from 'next/image'
import { PawPrint } from 'phosphor-react'
import './style.scss'

export default function Main() {
    return (
        <main className="main-login">
            <div className="bg-login">
                <Image src={`${window.innerWidth <= 764 ? "/background-login-mobile.jpeg" : "/background-login-pc.jpg"}`} alt="image-background-main-dogs" quality={100} fill />
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
}