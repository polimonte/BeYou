import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../components/css/layout.css";
import "./style.css";

import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import abrigo from "../../assets/img/abrigo.jpeg";
import projeto from "../../assets/img/projetoSocial.jpg";
import denuncie from "../../assets/img/denuncie.png";
import mvv from "../../assets/img/visão.svg";

class Home extends Component {
  render() {
    return (
      <>
        <main>
          <section className="container-1">
            <div className="banner">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={banner2} className="d-block" />
                  </div>
                  <div className="carousel-item">
                    <img src={banner1} className="d-block" />
                  </div>
                  <div className="carousel-item">
                    <img src={banner3} className="d-block" />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="display-3 titulo">Seja você e ponto.</h1>
          </section>

          <section className="container-2" id="container-2">
            <div className="banner-2">
              <div className="img-1 parent">
                <Link to="/acolhimento">
                  <img
                    className="child"
                    src={abrigo}
                    alt="Acolhimento"
                    width="295px"
                    height="281px"
                  />
                </Link>
                <Link to="/acolhimento">
                  <button type="button" className="btn btn-secondary btn__acolhimento">
                    Acolhimento
                  </button>
                </Link>
              </div>

              <div className="img-2">
                <Link to="/empregabilidade/capacitacao-e-cursos">
                  <img
                    src={projeto}
                    alt="Projetos"
                    width="295px"
                    height="281px"
                  />
                </Link>
                <Link to="/empregabilidade/capacitacao-e-cursos">
                  <button type="button" className="btn btn-secondary btn__cursos">
                    Projetos
                  </button>
                </Link>
              </div>

              <div className="img-3">
                <a
                  href="https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos"
                  target="_blank"
                >
                  <img
                    src={denuncie}
                    alt="Denúncia"
                    width="295px"
                    height="281px"
                  />
                </a>
                <a
                  href="https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos"
                  target="_blank"
                >
                  <button type="button" className="btn btn-danger btn__denuncia">
                    Denuncie
                  </button>
                </a>
              </div>
            </div>
          </section>

          <section className="container-3">
            <h1 className="display-4">Informe-se!</h1>

            <div className="noticias">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <iframe
                      height="315"
                      src="https://www.youtube.com/embed/EREoc40JBr8"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="carousel-item">
                    <iframe
                      height="315"
                      src="https://www.youtube.com/embed/sXcp2rMHC8o"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="carousel-item">
                    <iframe
                      height="315"
                      src="https://www.youtube.com/embed/bgfEa7QYEcs"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Próximo</span>
                </button>
              </div>
            </div>
            <div id="ver-mais">
              <Link to="/informacoes/informacoes-legais">
                <button type="button" className="btn btn-secondary btn__video">
                  ver mais
                </button>
              </Link>
            </div>
          </section>

          <section className="container-4">
            <div className="mvv">
              <div>
                <img src={mvv} alt="Missão, Visão e Valores" />
                <Link to="/sobre-nos/missao-visao-valores">
                  <button type="button" className="btn btn-secondary btn__mvv">
                    MVV
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
