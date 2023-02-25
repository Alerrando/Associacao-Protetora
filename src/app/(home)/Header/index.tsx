'use client';

import { PawPrint, SignIn } from "phosphor-react";
import "./style.scss";

export default function Header() {
  return (
    <header className="header-main">
      <div className="header-container">
        <PawPrint size={32} />

        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Blog</li>
        </ul>

        <div className="sign-in">
          <SignIn size={32} />
        </div>
      </div>
    </header>
  );
}
