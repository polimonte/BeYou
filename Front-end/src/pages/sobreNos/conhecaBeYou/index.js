import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../components/css/layout.css";
import "./style.css";
import linkedin from "../../../assets/img/linkedin.svg";
import github from "../../../assets/img/github.svg";
import Anderson from "../../../assets/img/Anderson.jpg";
import Poliane from "../../../assets/img/Poliane.jpeg";
import Mercia from "../../../assets/img/Mercia.jpeg";
import Fabio from "../../../assets/img/Fabio.jpeg";
import Matheus from "../../../assets/img/Matheus.jpeg";

class SobreBeYou extends Component {
  render() {
    return (
      <>
        <section className="section__sobre">
          <div className="bloco__1">
            <p className="p__1">
              Sejam bem-vindes a nossa coméia, uma Plataforma colaborativa afim
              de fomentar discussões em rede objetivando a construção de espaços
              que garantam a inviolabilidade do direito à vida, à liberdade, à
              igualdade, à segurança e à propriedade. Atuando diretamente na
              dificuldade de acesso da população LGBTQIA+ aos diversos espaços
              de direito, promovendo cidadania, dignidade e equidade.
              Perpassando pelos conceitos de igualdade de gênero, redução da
              desigualdade, promoção de saúde e bem-estar e a erradicação da
              pobreza, atuando em 4 dos Objetivos de Desenvolvimentos
              Sustentáveis (ODS). A Be You foi criada com o intuito de fornecer
              a você, pessoa LGBTQIA+, acesso a oportunidades. Sejam elas de
              emprego, abrigo, profissionalização ou iniciativas sociais.
            </p>

            <p className="p__2">
              Pensado e produzido pelo Squad 02 da Recode PRO, a Be You encanta
              não só pela ideia como pela beleza, fazendo com que qualquer
<<<<<<< HEAD
              individuo que tenha contato com o projeto se sinta mais uma
              abelhinha pronta pra integrar essa grande coméia. Falando do Squad
              02, te convido a conhecer-nos um pouco mais, visite nossas redes,
              adicione-nos, vamos trocar susjestões, ideias, conquistas, fique a
=======
              indivíduo que tenha contato com o projeto se sinta mais uma
              abelhinha pronta pra integrar essa grande coméia. Falando do Squad
              02, te convido a conhecer-nos um pouco mais, visite nossas redes,
              adicione-nos, vamos trocar sugestões, ideias, conquistas, fique a
>>>>>>> 8933722 ('Finalizando-Projeto')
              vontade.
            </p>
          </div>

          <div className="squad">
            <div className="cartao__beYou col-sm-6 col-lg-4 col-xl-4">
              <img src={Poliane} className="squad__img" alt="..." />
              <div className="squad__descricao">
                <h5 className="squad__titulo">Poliane Maria</h5>
                <a
                  href="https://www.linkedin.com/in/polianemaria/"
                  target="_blank"
                >
                  <img src={linkedin} className="midias"></img>
                </a>
                <a href="https://github.com/polimonte" target="_blank">
                  <img src={github} className="midias"></img>
                </a>
              </div>
            </div>

            <div className="cartao__beYou col-sm-6 col-lg-4 col-xl-4">
              <img src={Anderson} className="squad__img" alt="..." />
              <div className="squad__descricao">
                <h5 className="squad__titulo">Anderson Roque</h5>
                <a
                  href="https://www.linkedin.com/in/andersonroque/"
                  target="_blank"
                >
                  <img src={linkedin} className="midias"></img>
                </a>
                <a href="https://github.com/Androque" target="_blank">
                  <img src={github} className="midias"></img>
                </a>
              </div>
            </div>

            <div className="cartao__beYou col-sm-6 col-lg-4 col-xl-4">
              <img src={Mercia} className="squad__img" alt="..." />
              <div className="squad__descricao">
                <h5 className="squad__titulo">Mércia Nunes</h5>
                <a
                  href="https://www.linkedin.com/in/mercianunes/"
                  target="_blank"
                >
                  <img src={linkedin} className="midias"></img>
                </a>
              </div>
            </div>

            <div className="cartao__beYou col-sm-6 col-lg-4 col-xl-4">
              <img src={Matheus} className="squad__img" alt="..." />
              <div className="squad__descricao">
                <h5 className="squad__titulo">Matheus Modesto</h5>
                <a
                  href="https://www.linkedin.com/in/matheus-modesto/"
                  target="_blank"
                >
                  <img src={linkedin} className="midias"></img>
                </a>
              </div>
            </div>

            <div className="cartao__beYou col-sm-6 col-lg-4 col-xl-4">
              <img src={Fabio} className="squad__img" alt="..." />
              <div className="squad__descricao">
                <h5 className="squad__titulo">Fabio Junior</h5>
                <a href="https://www.linkedin.com/in/fabiorbj/" target="_blank">
                  <img src={linkedin} className="midias"></img>
                </a>
              </div>
            </div>
          </div>

          <div className="bloco__2">
            <p className="p__3">
              Por se tratar de uma coméia sabemos que não fazemos nada sozinhos
              por aqui, então se você possui uma empresa e deseja aumentar a
              diversidade na sua empresa ou conhece formas de nos ceder bolsas
              integrais em cursos profissionalizantes, seja nosso parceiro.
              Agora se você é profissional de alguma area ou possui ideias ou
              conhecimentos a serem compartilhados conosco, seja nosso
              voluntário. Cadastre-se em nosso site que entraremos em contato,
              juntos pensaremos em como podemos ajudar e contruibuir para uma
              sociedade mais humana e diversa.
            </p>

            <p className="p__4">
              Abaixo temos um video que consiste numa edição do programa
              Profissão Reporter - Rede Globo, exibido no dia 15/03/2022 onde
              relata e embasa que iniciativas como a Be You são extremamente
              necessarias no dia de hoje, onde pessoas LGBTQIA+, principalmente Trans e Travesis,
              encontram obstáculos pelo simples fato de serem quem são.
            </p>
          </div>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2i0RGs2MgEs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="video__beYou"
          ></iframe>
        </section>
      </>
    );
  }
}

export default SobreBeYou;
