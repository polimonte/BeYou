import React, { Component } from "react";
import { Link, link } from "react-router-dom";
import logo from "../../assets/img/LOGO BEYOU.svg";
import Hamburguer from "../../assets/img/hamburguer.svg"

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <section className="container-0">
            <Link to="/">
              <img id="logo" src={logo} />
            </Link>
            <nav>
              <div className="menu-0">
                <ul>
                  <li>
                    <a id="titulo">Empregabilidade</a>
                    <ul>
                      <li>
                        <Link to="/empregabilidade/vagas-de-emprego">
                          Vagas de Emprego
                        </Link>
                      </li>
                      <li>
                        <Link to="/empregabilidade/capacitacao-e-cursos">
                          Capacitação e Cursos
                        </Link>
                      </li>
                      <li>
                        <Link to="/empregabilidade/onde-procurar">
                          Onde procurar vagas?
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Acolhimento</a>
                    <ul>
                      <li>
                        <Link to="/acolhimento/encontre-uma-casa">
                          Encontre uma casa de acolhimento
                        </Link>
                      </li>
                      <li>
                        <Link to="/acolhimento/indique-uma-casa">
                          Indique uma casa de acolhimento
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a id="titulo">Sobre nós</a>
                    <ul>
                      <li>
                        <Link to="/sobre-nos/be-you">
                          Sobre a Be You
                        </Link>
<<<<<<< HEAD
                      </li>              
                      <li>
                        <Link to="/sobre-nos/seja-um-parceiro">
                          Seja um parceiro
                        </Link>
=======
>>>>>>> 8933722 ('Finalizando-Projeto')
                      </li>
                      <li>
                        <Link to="/sobre-nos/seja-um-voluntario">
                          Seja um voluntário
                        </Link>
                      </li>
                      <li>
                        <Link to="/sobre-nos/missao-visao-valores">
                          Missão, visão e valores
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a id="titulo">Informações</a>
                    <ul>
                      <li>
                        <Link to="/informacoes/informacoes-legais">
                          Informações legais
                        </Link>
                      </li>
                      <li>
                        <Link to="/informacoes/dados-importantes">
                          Dados importantes
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li id="titulo">
                    <Link to="/admin-login">admin</Link>
                  </li>
                </ul>
              </div>

              <div className="mobile">
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle menu"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={Hamburguer}></img>
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/empregabilidade/vagas-de-emprego">
                        Vagas de Emprego
                      </Link>
                    </li>
                    <li>
                      <Link to="/empregabilidade/capacitacao-e-cursos">
                        Capacitação e Cursos
                      </Link>
                    </li>
                    <li>
                      <Link to="/empregabilidade/onde-procurar">
                        Onde procurar vagas?
                      </Link>
                    </li>
                    <li>
                      <Link to="/acolhimento/encontre-uma-casa">
                        Encontre uma casa de acolhimento
                      </Link>
                    </li>
                    <li>
                      <Link to="/acolhimento/indique-uma-casa">
                        Indique uma casa de acolhimento
                      </Link>
                    </li>
                    <li>
                      <Link to="/sobre-nos/be-you">
                        Sobre a Be You
                      </Link>
                    </li>
                    <li>
<<<<<<< HEAD
                      <Link to="/sobre-nos/seja-um-parceiro">
                        Seja um parceiro
                      </Link>
                    </li>
                    <li>
=======
>>>>>>> 8933722 ('Finalizando-Projeto')
                      <Link to="/sobre-nos/seja-um-voluntario">
                        Seja um voluntário
                      </Link>
                    </li>
                    <li>
                      <Link to="/sobre-nos/missao-visao-valores">
                        Missão, visão e valores
                      </Link>
                    </li>
                    <li>
                      <Link to="/informacoes/informacoes-legais">
                        Informações legais
                      </Link>
                    </li>
                    <li>
                      <Link to="/informacoes/dados-importantes">
                        Dados importantes
                      </Link>
                    </li>
                    <li id="titulo">
                      <Link to="/admin-login">admin</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </section>
        </header>
      </>
    );
  }
}

export default Header;
