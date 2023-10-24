import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mensal Comics
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contato">Contato</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/sobre">Sobre</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav>
        <div id="carouselExampleAutoplaying" className="carousel slide mt-3 mb-3" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://picsum.photos/1300/300" className="" alt="..."/>
            </div>
            <div className="carousel-item active">
              <img src="https://picsum.photos/1300/300" className="" alt="..."/>
            </div>
            <div className="carousel-item active">
              <img src="https://picsum.photos/1300/300" className="" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </nav>
      
    </header>
  );
}