import Image from 'next/image';
import './style.scss'

export default function Main() {

  return (
    <main className="main-home">
      <div className="main-image">
        <Image src={"/background-main-home.jpg"} alt="image-background-main-dogs" sizes="100%" quality={100} fill />
      </div>
      <div className="main-container">
        <div className="main-info">
          <div className="main-text">
            <p>Ajudar é facíl</p>
            <h1>Essa caudas precisam de amor e carinho!</h1>
          </div>

          <span className="info-main-span">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            consectetur mi vel lectus facilisis, at vulputate augue varius.
          </span>

          <div className="main-buttons">
            <button className="btn donate">Doar</button>

            <button className="btn catalog">Doação</button>
          </div>
        </div>
      </div>
    </main>
  );
}
