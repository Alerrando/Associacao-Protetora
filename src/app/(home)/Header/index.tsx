'use client';

import Link from "next/link";
import { List, PawPrint, SignIn, X } from "phosphor-react";
import { useState } from "react";
import "./style.scss";

export type MenuProps = {
  value: string
}

const MenuHandle: MenuProps = {
  value: "closed" || "open"
}

export default function Header() {
  const [menu, setMenu] = useState(MenuHandle);

  console.log(menu.value)

  return (
    <header className="header-main">
      <div className="header-container">
        <PawPrint size={32} />

        <div className={`menu ${menu.value}`}>
          <nav>
            <header className="header-nav mobile">
              <X size={32} />
            </header>

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
          </nav>
        </div>

        <List size={32} className="hamburguer" onClick={() => setMenu({ value: "open" })} />
      </div>
    </header>
  );
}
