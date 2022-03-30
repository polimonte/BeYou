import React, { Component } from "react";
import "../../../components/css/layout.css";
import "./style.css";
import Doe from "../../../assets/img/doe-sangue.jpg";
import Adocao from "../../../assets/img/adocao-homo.jpg";
import Saude from "../../../assets/img/saude-lgbt.jpg";
import Hormonioterapia from "../../../assets/img/hormonioterapia.jpg";
import Social from "../../../assets/img/nome-social.jpg";
import Seguranca from "../../../assets/img/seguranca-alimentar.png";

class Legais extends Component {
  render() {
    return (
      <>
        <main className="principal columns">
          <section className="column main-column" id="primeira">
            <a
              className="artigo first-artigo"
              href="https://ibdfam.org.br/noticias/8452/Homossexuais+podem+doar+sangue+h%C3%A1+um+ano%3B+decis%C3%A3o+do+STF+foi+passo+importante+pelos+direitos+da+popula%C3%A7%C3%A3o+LGBTI"
            >
              <figure className="artigo-image is-4by3">
                <img src={Doe} alt="" />
              </figure>
              <div className="artigo-body">
                <h2 className="article-title">
                  Homossexuais podem doar sangue há um ano; decisão do STF foi
                  passo importante pelos direitos da população LGBTQIA+
                </h2>
                <p className="artigo-content">
                  Há um ano, a maioria dos ministros do Supremo Tribunal Federal
                  – STF entendeu como inconstitucional o impedimento à doação de
                  sangue por homens que mantêm relações sexuais com pessoas do
                  mesmo sexo, como homossexuais e bissexuais.
                </p>
              </div>
            </a>

            <div className="columns">
              <div className="column nested-column">
                <a
                  className="artigo"
                  href="https://www.cnnbrasil.com.br/saude/10-anos-da-politica-nacional-de-saude-lgbt-coloca-la-em-pratica-ainda-e-um-desafio/"
                >
                  <figure className="artigo-image is-16by9">
                    <img src={Saude} alt="" />
                  </figure>
                  <div className="artigo-body">
                    <h2 className="artigo-title">
                      10 anos da política nacional de saúde LGBT: colocá-la em
                      prática ainda é um desafio
                    </h2>
                    <p className="artigo-content">
                      No dia 1º de dezembro de 2011, foi instituída a Política
                      Nacional de Saúde Integral de Lésbicas, Gays, Bissexuais,
                      Travestis e Transexuais (Política Nacional de Saúde
                      Integral LGBT) no âmbito do Sistema Único de Saúde (SUS).
                      A medida tem como objetivo geral promover a saúde integral
                      dessa população, eliminando a discriminação e o
                      preconceito institucionais e contribuindo para a redução
                      das desigualdades. Hoje, dez anos após a instituição da
                      política, especialistas em saúde pública consultados pela
                      CNN apontam os desafios para que se coloque em prática o
                      atendimento integral e a promoção da saúde dessa
                      população.
                    </p>
                  </div>
                </a>

                <a
                  className="artigo"
                  href="https://drauziovarella.uol.com.br/endocrinologia/como-funciona-a-hormonioterapia-para-mulheres-trans/"
                >
                  <figure className="artigo-image is-16by9">
                    <img src={Hormonioterapia} alt="" />
                  </figure>
                  <div className="artigo-body">
                    <h2 className="artigo-title">
                      Como funciona a hormonioterapia para mulheres trans
                    </h2>
                    <p className="artigo-content">
                      A terapia com hormônios para transição de gênero deve ser
                      feita sempre com acompanhamento profissional. A
                      hormonioterapia é um dos recursos disponíveis para a
                      transição de gênero de mulheres trans, cujo sexo designado
                      no nascimento foi o masculino, mas que se identificam e se
                      expressam no feminino.
                    </p>
                  </div>
                </a>
              </div>

              <div className="column">
                <a
                  className="artigo"
                  href="https://www.aurum.com.br/blog/nome-social/"
                >
                  <figure className="artigo-image is-16by9">
                    <img src={Social} alt="" />
                  </figure>
                  <div className="artigo-body">
                    <h2 className="article-title">
                      Aspectos relevantes sobre o nome social e o direito à
                      alteração do nome
                    </h2>
                    <p className="artigo-content">
                      O nome é uma característica importantíssima na vida dos
                      seres humanos, afinal, é o elemento que primeiro nos
                      diferencia e identifica. É pelo nome que nos apresentamos,
                      somos chamados ou referidos e que consta em todos os
                      nossos documentos pessoais.
                    </p>
                  </div>
                </a>

                <a
                  className="artigo"
                  href="https://treediversidade.com.br/diferenca-entre-diversidade-e-inclusao/"
                >
                  <div className="artigo-body">
                    <h2 className="artigo-title">
                      Entenda a diferença entre diversidade e inclusão
                    </h2>
                    <p className="artigo-content">
                      Você sabe qual é a diferença entre diversidade e inclusão?
                      As duas palavras costumam aparecer sempre juntas, o que
                      causa, muitas vezes, uma certa confusão. A verdade é que
                      cada uma remete a um conceito diferente. Contudo, de fato,
                      elas não podem andar separadas, pois são complementares.
                    </p>
                  </div>
                </a>

                <a
                  className="artigo"
                  href="https://www.cnnbrasil.com.br/business/10-empresas-que-fazem-diferenca-e-a-licao-de-casa-para-a-inclusao-de-lgbts/"
                >
                  <div className="artigo-body">
                    <h2 className="artigo-title">
                      10 empresas que fazem diferença e a lição de casa para a
                      inclusão de LGBTs
                    </h2>
                    <p className="artigo-content">
                      Da sopa de letrinhas LGBTQI+, o “T” é, sem dúvida, a mais
                      vulnerável, pontua Maite Schneider, fundadora do
                      TransEmpregos, uma ONG que ajuda a conectar oportunidades
                      de trabalho a pessoas trans. Segundo ela, atualmente há
                      uma interlocução maior com o mundo corporativo, que
                      entende o valor da diversidade. Em 2014, um ano após a
                      criação da instituição, havia 14 empresas cadastradas, e,
                      atualmente, são 452 parceiras.{" "}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <section className="column" id="segunda">
            <a
              className="artigo"
              href="https://www.telavita.com.br/blog/adocao-homoafetiva/"
            >
              <figure className="artigo-image is-3by2">
                <img src={Adocao} alt="" />
              </figure>
              <div className="artigo-body">
                <h2 className="article-title">
                  Adoção homoafetiva: legalidade e preconceitos
                </h2>
                <p className="artigo-content">
                  47.460. Esse é o número de crianças e adolescentes que vivem
                  em abrigos no Brasil. Os dados do final de 2017 são do
                  Conselho Nacional de Justiça. Entretanto, o que chama mais a
                  atenção desses dados é que somente 17,8% deles estão aptos
                  para a adoção e, consequentemente, encontrar uma nova família.
                </p>
              </div>
            </a>

            <a
              className="artigo"
              href="https://www.telavita.com.br/blog/adocao-homoafetiva/"
            >
              <figure className="artigo-image is-3by2">
                <img src={Seguranca} alt="" />
              </figure>
              <div className="artigo-body">
                <h2 className="artigo-title">
                  Campanha de segurança alimentar apoia população LGBTQIA+
                </h2>
                <p className="artigo-content">
                  A campanha surge em um contexto de resposta aos impactos
                  socioeconômicos da pandemia de COVID-19, que afetou de forma
                  desproporcional parcelas mais vulnerabilizadas da população,
                  entre elas, pessoas LGBTQIA+, especialmente trans e travestis.{" "}
                </p>
              </div>
            </a>

            <a
              className="artigo"
              href="http://politize.com.br/equidade/blogpost/direitos-lgbt-o-que-sao/"
            >
              <div className="artigo-body">
                <h2 className="artigo-title">Direitos LGBT+: o que são?</h2>
                <p className="artigo-content">
                  Já imaginou você ser privado de gostar de alguém ou de
                  simplesmente não poder ser quem você realmente é? Isso pode
                  ser visto como uma afronta a sua liberdade individual, não é
                  mesmo? Porém, muitas pessoas no mundo todo enfrentam
                  dificuldades, desigualdades e discriminação justamente por
                  esses motivos, em vista de suas orientações sexuais e
                  identidades de gênero.{" "}
                </p>
              </div>
            </a>

            <a
              className="artigo"
              href="https://catracalivre.com.br/cidadania/saiba-quais-direitos-as-leis-brasileiras-garantem-populacao-lgbt/"
            >
              <div className="artigo-body">
                <h2 className="artigo-title">
                  Saiba quais direitos as leis brasileiras garantem à população
                  LGBT
                </h2>
                <p className="artigo-content">
                  O Conselho Nacional de Justiça confirmou na última
                  terça-feira, 12, que filhos gerados por reprodução assistida
                  podem ser registrados sem burocracia, por casais hétero ou
                  homossexuais
                </p>
              </div>
            </a>
          </section>
        </main>
      </>
    );
  }
}

export default Legais;
