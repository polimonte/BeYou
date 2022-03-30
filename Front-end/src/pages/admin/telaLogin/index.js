import React, { Component } from "react";
import { Link, link } from "react-router-dom";
import "../../../components/css/layout.css";
import "../../../pages/admin/telaLogin/style.css";
import Missao from "../../../assets/img/missao.svg"

class Login extends Component {
  render() {
    return (
      <>
        <main>
          <section>
            <div className="container primeiro__bloco__login">
              <div className="container-login">
                <div className="wrap-login">
                  <form className="login-form">
                    <span className="login-form-title">Faça o login</span>

                    <div className="wrap-input margin-top-35 margin-bottom-35">
                      <input
                        className="input-form email"
                        type="text"
                        name="email"
                        autocomplete="off"
                      />
                      <span
                        className="focus-input-form"
                        data-placeholder="E-mail"
                      ></span>
                    </div>

                    <div className="wrap-input margin-bottom-35">
                      <input
                        className="input-form"
                        type="password"
                        name="password"
                      />
                      <span
                        className="focus-input-form"
                        data-placeholder="Senha"
                      ></span>
                    </div>

                    <div className="container-login-form-btn">
                      <Link to="/admin-area">
                        <div className="login-form-btn">Entrar</div>
                      </Link>
                    </div>

                    <ul className="login-utils">
                      <li className="margin-bottom-8 margin-top-8">
                        <span className="text1">Esqueceu sua</span>

                        <a href="#" className="text2">
                          senha?
                        </a>
                      </li>

                      <li>
                        <span className="text1">Não tem conta?</span>

                        <a href="#" className="text2">
                          Criar
                        </a>
                      </li>
                    </ul>
                  </form>
                </div>
                <img
                  src={Missao}
                  width="300"
                  height="300"
                  className="margin-left-50"
                />
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Login;
