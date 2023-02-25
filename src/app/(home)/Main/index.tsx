/* eslint-disable @next/next/no-img-element */
import './style.scss'

export default function Main() {
  return (
    <main>
      <img src="Dog-cat-BG.png" alt="imagem-background-main-dog-and-cat" className='main-img' />
      <div className="main-container">
        <div className="main-text">
          <p>Helping is Easy</p>
          <h1>These tails need love and care!</h1>
        </div>

        <span className="info-main-span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          consectetur mi vel lectus facilisis, at vulputate augue varius.
        </span>

        <div className="main-buttons">
          <button className="btn donate">Donate</button>

          <button className="btn catalog">Catalog</button>
        </div>
      </div>
    </main>
  );
}
