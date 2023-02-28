'use client';

import Link from "next/link";
import { PawPrint, SignIn } from "phosphor-react";
import "./style.scss";

export default function Header() {
  return (
    <header className="header-main">
      <div className="header-container">
        <PawPrint size={32} />

        <ul>
          <Link href="/" data-replace="Home">
            <li>Home</li>          
          </Link>

          <Link href="/pets" data-replace="Pets">
            <li>Pets</li>
          </Link>

          <Link href="/sobre" data-replace="Sobre Nós">
            <li>Sobre Nós</li>
          </Link>

          <Link href="/blog" data-replace="Blog">
            <li>Blog</li>
          </Link>
        </ul>

        <div className="sign-in">
          <Link href="/login">
            <SignIn size={32} />
          </Link>
        </div>
      </div>
    </header>
  );
}
