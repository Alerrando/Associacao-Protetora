'use client';
import Image from 'next/image'
import { PawPrint } from 'phosphor-react'
import './style.scss'

export default function Main() {
    return (
        <main className="main-login">
            <div className="bg-login">
                <Image src={"/background-main-home-cat.jpeg"} alt="image-background-main-dogs" quality={100} fill />
            </div>

            <section className='container-login'>
                <header className='login-header'>
                    <PawPrint size={64} />
                </header>

                <form>

                </form>
            </section>
        </main>
    )
}