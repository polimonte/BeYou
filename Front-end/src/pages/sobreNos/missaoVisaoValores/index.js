import React, { Component } from "react";
import "../../../components/css/layout.css";
import "./style.css";

class Mvv extends Component {
  render() {
    return (
      <>
        <main>
          <section className="mvv">

            <article className="missao">
              <h1>Missão</h1>
              <p>
                Nossa missão é informar e conscientizar a sociedade brasileira
                sobre a história, luta e direitos da população LGBTQIA+,
                fomentando espaços de debate e discussão, através da construção
                de uma rede colaborativa e inclusiva.
              </p>
            </article>

            <article className="visao">
              <h1>Visão</h1>
              <p>
                Ser uma rede de referência para a população LGBTQIA+, fornecendo
                informações relevantes ao público alvo e servindo como ponte
                entre as diversas organizações atuantes na luta contra a
                discriminação, exclusão e todos os tipos de preconceito que
                violem os direitos á vida, à liberdade, a igualdade, a segurança
                e a propriedade, conforme o artigo 5º da Constituição Federal.
              </p>
            </article>

            <article className="valores">
              <h1>Valores</h1>
              <ul>
                <div>
                  <li>Diversidade</li>
                  <li>Inclusão</li>
                  <li>Tolerância</li>
                  <li>Respeito</li>
                </div>
                <div>
                  <li>Transparência</li>
                  <li>Cidadania</li>
                  <li>Equidade</li>
                  <li>Dignidade</li>
                </div>
              </ul>
            </article>
          </section>
        </main>
      </>
    );
  }
}

export default Mvv;
