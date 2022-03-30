import React, { Component } from "react";
import "../../../components/css/layout.css";
import "./style.css";

import casaAurora from "../../../assets/img/casaAurora.jpg"
import transviver from "../../../assets/img/transviver.jpg"
import casaChama from "../../../assets/img/casaChama.png"
import casaFlorescer from "../../../assets/img/casaFlorescer.jpg"
import casa1 from "../../../assets/img/casa1.png"
import casaNem from "../../../assets/img/casaNem.jpg"
import casaMiga from "../../../assets/img/casaMiga.jpg"
import casaAstra from "../../../assets/img/casaAstra.jpg"
import casAmor from "../../../assets/img/casAmor.png"
import transVest from "../../../assets/img/transVest.jpg"
import casaTransformar from "../../../assets/img/casaTransformar.jpg"
import caerr from "../../../assets/img/caerr.jpeg"

class EncontreUmaCasa extends Component {
  render() {
    return (
      <>
        <main>
          <section className="primeiro__bloco">
            <div className="card-group card__group__encontre-casa">
              <div className="card">
                <a
                  href="https://www.facebook.com/auroracasalgbt/"
                  target="_blank"
                >
                  <img src={casaAurora} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Casa Aurora</h5>
                  <p className="card-text">
                    {" "}
                    Inaugurada em maio de 2019, a Casa Aurora é o primeiro
                    centro de acolhida exclusivo para LGBTIs de Salvador.
                    Coordenado pelo casal trans João Hugo e Sellena Ramos, da
                    Associação de Diversidade e Inclusão da Bahia (ADIBA), o
                    local recebe jovens queer de 18 a 29 anos em situação de
                    vulnerabilidade social. O projeto oferece acolhimento
                    integral, alimentação, produtos de higiene, serviços
                    jurídicos, projetos socioeducativos e atendimento
                    psicológico gratuito. A manutenção é feita por meio de
                    financiamento coletivo e doações.
                  </p>
                </div>
              </div>

              <div className="card">
                <a href="https://www.facebook.com/transviver" target="_blank">
                  <img src={transviver} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Transviver</h5>
                  <p className="card-text">
                    O Instituto Transviver é um centro de cultura, educação,
                    esportes e acolhimento para LGBTIs, mas com um olhar
                    especial para as pessoas trans. Criado em 2018 pelos
                    ativistas Regina Guimarães e Juan Guiã, o projeto luta hoje
                    pela reforma de sua sede. Após a conclusão das obras, a casa
                    será o primeiro espaço de acolhimento de pessoas LGBTI+ em
                    situação de vulnerabilidade social de Pernambuco, com
                    dormitórios, cozinha e área de convivência completas. A
                    manutenção também é feita por meio de financiamento coletivo
                    e doações.
                  </p>
                </div>
              </div>

              <div className="card">
                <a href="https://www.facebook.com/ongcasachama" target="_blank">
                  <img src={casaChama} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Casa Chama</h5>
                  <p className="card-text">
                    A Casa Chama é uma organização civil que surgiu em 2018 com
                    o objetivo de fortalecer a comunidade de artistas trans por
                    meio de atendimentos de saúde, projetos culturais e
                    assistências jurídicas. A casa é um ambiente de convívio
                    seguro que produz desde eventos culturais e grupos de estudo
                    até projetos de cuidado e apoio jurídico. Durante a
                    pandemia, o órgão atua com a criação de um fundo emergencial
                    de apoio para pessoas trans afetadas pelo covid-19 e
                    assistidas pelo projeto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="card-group card__group__encontre-casa">
              <div className="card">
                <a
                  href="https://www.facebook.com/casaflorescer"
                  target="_blank"
                >
                  <img src={casaFlorescer} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Casa Florescer</h5>
                  <p className="card-text">
                    Criada em 2016, a Casa Florescer é o primeiro centro de
                    acolhida exclusivo para mulheres trans e travestis em
                    situação de vulnerabilidade social. O projeto tem como
                    objetivo não apenas acolher, mas também reverter o quadro
                    com atendimento social e psicológico. Articulações com as
                    redes de apoio garantem o acesso à alimentação, cursos de
                    qualificação, regularização de documentos e acompanhamento
                    médico capacitado para todas as beneficiadas.
                  </p>
                </div>
              </div>

              <div className="card">
                <a href="https://www.facebook.com/casaum" target="_blank">
                  <img src={casa1} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Casa 1</h5>
                  <p className="card-text">
                    Pioneira no Brasil, a Casa 1 é um centro de acolhida de
                    jovens LGBTI+ expulsos de casa pela família, um centro
                    cultural e uma clínica social que atua no centro da cidade
                    de São Paulo. O projeto conta com programações
                    socioeducativas e disponibiliza ao público atendimentos
                    psicoterápicos gratuitos ou de baixo custo. Aproximadamente
                    3.500 pessoas são atendidas mensalmente pelos projetos da
                    casa.
                  </p>
                </div>
              </div>

              <div className="card">
                <a
                  href="https://www.facebook.com/casanemcasaviva"
                  target="_blank"
                >
                  <img src={casaNem} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Casa Nem</h5>
                  <p className="card-text">
                    A Casa Nem é um espaço de acolhimento para pessoas LGBTIs em
                    situação de vulnerabilidade social no Rio de Janeiro. Com
                    foco em transexuais e transgeneres, o projeto é um espaço
                    autossustentável que também recebe diversos tipos de
                    doações. Administrada por ativistas trans, a casa oferece
                    acolhimento, apoio e resgate de autoestima para cerca de 50
                    pessoas que foram vítimas de violência e rejeição familiar.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="card-group card__group__encontre-casa">
              <div className="card">
                <a href="https://www.facebook.com/casamigaLGBT" target="_blank">
                  <img src={casaMiga} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">CasaMiga</h5>
                  <p className="card-text">
                    Criada em 2018, ano em que Manaus registrou o maior número
                    de LGBTs assassinados no país em termos absolutos, a Casa
                    Miga acolhe lésbicas, gays, bissexuais, transexuais e
                    travestis, além de imigrantes ou refugiados LGBTI+. Com
                    apoio da Agência da ONU para Refugiados (ACNUR), a casa já é
                    uma das referências no suporte às pessoas em
                    vulnerabilidade, com atendimentos psicológicos, sociais e
                    profissionais realizados gratuitamente.
                  </p>
                </div>
              </div>

              <div className="card">
                <a href="https://www.facebook.com/astralgbt" target="_blank">
                  <img src={casaAstra} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Casa Astra</h5>
                  <p className="card-text">
                    Fundada em 2001, a Astra trabalha pela conquista e garantia
                    de plenos direitos humanos para a comunidade LGBTI+ de
                    Aracaju, promovendo saúde, educação e cidadania plena aos
                    membros do grupo. Durante a pandemia, a ONG lançou o projeto
                    Acódi LGBT, com foco direto na arrecadação de cestas e de
                    insumos de higienização para auxiliar os atingidos pela
                    crise desencadeada pela pandemia.
                  </p>
                </div>
              </div>

              <div className="card">
                <a
                  href="https://www.facebook.com/CasAmorlgbtqi"
                  target="_blank"
                >
                  <img src={casAmor} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">CasaMor</h5>
                  <p className="card-text">
                    Criada em 2018 após a mobilização da sociedade civil, a
                    CasAmor atua como um centro de amparo à comunidade LGBTI+
                    que se encontra em situação de vulnerabilidade social.
                    Durante a pandemia, o projeto trabalha também com uma
                    campanha de arrecadação de fundos para a distribuição de
                    cestas básicas, itens de higiene pessoal e materiais de
                    limpeza que estão sendo entregues à população.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="card-group card__group__encontre-casa">
              <div className="card">
                <a
                  href="https://www.instagram.com/ongtransvest/"
                  target="_blank"
                >
                  <img src={transVest} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Transvest</h5>
                  <p className="card-text">
                    A Transvest promove um cursinho popular para travestis e
                    transexuais em Belo Horizonte. O projeto oferece, além das
                    aulas preparatórias para o Enem e Encceja, oficinas
                    educativas e eventos culturais. Ensino de idiomas, aulas de
                    defesa pessoal e apoio jurídico são algumas das ações
                    realizadas pela instituição, que também recebe alunos em
                    regime semi-aberto do presídio de Bicas.
                  </p>
                </div>
              </div>

              <div className="card">
                <a
                  href="https://www.instagram.com/casatransformar/"
                  target="_blank"
                >
                  <img
                    src={casaTransformar}
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Casa Transformar</h5>
                  <p className="card-text">
                    Financiada exclusivamente por doações, a Casa Transformar
                    acolhe membros da comunidade LGBTI+ em situação de
                    vulnerabilidade social em Fortaleza. Novas vagas de acolhida
                    são sempre anunciadas pelas redes sociais do projeto, que
                    também necessita de doações e de uma equipe voluntária.
                  </p>
                </div>
              </div>

              <div className="card">
                <a
                  href="https://www.instagram.com/caerr_alagoas/"
                  target="_blank"
                >
                  <img src={caerr} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">CAERR</h5>
                  <p className="card-text">
                    O Centro de Acolhimento Ezequias Rocha Rego (CAERR) para a
                    população LGBTQIA+ é a primeira Casa de Acolhimento de
                    Alagoas para pessoas LGBTQIA+, fica na Rua Supervisor Ivaldo
                    Ferino, nº 413, no Clima Bom, em Maceió.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default EncontreUmaCasa;
