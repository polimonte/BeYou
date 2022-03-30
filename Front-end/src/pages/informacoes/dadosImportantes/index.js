import React, { Component } from "react";
import "../../../components/css/layout.css";
import "./style.css";

class Dados extends Component {
  render() {
    return (
      <>
        <main className="principal columns">
          <section className="column main-column" id="primeira">
            <a
              className="artigo first-artigo"
              href="https://www.in.gov.br/web/dou/-/resolucao-n-2.265-de-20-de-setembro-de-2019-237203294"
            >
              <div className="artigo-body">
                <h2 className="article-title">
                  RESOLUÇÃO Nº 2.265, DE 20 DE SETEMBRO DE 2019
                </h2>
                <p className="artigo-content">
                  Dispõe sobre o cuidado específico à pessoa com incongruência
                  de gênero ou transgênero e revoga a Resolução CFM nº
                  1.955/2010. O CONSELHO FEDERAL DE MEDICINA, no uso das
                  atribuições conferidas pela Lei nº 3.268, de 30 de setembro de
                  1957, regulamentada pelo Decreto nº 44.045, de 19 de julho de
                  1958, pela Lei nº 11.000, de 15 de dezembro 2004, pelo Decreto
                  nº 6.821/2009 e pela Lei nº 12.514, de 28 de outubro de 2011,
                  e(...)
                </p>
              </div>
            </a>

            <div className="columns">
              <div className="column nested-column">
                <a
                  className="artigo"
                  href="https://www.crn6.org.br/crn-1-lanca-guia-de-cuidado-e-atencao-nutricional-a-populacao-lgbtqia-"
                >
                  <div className="artigo-body">
                    <h2 className="artigo-title">
                      CRN-1 lança Guia de cuidado e atenção nutricional à
                      população LGBTQIA+
                    </h2>
                    <p className="artigo-content">
                      O Conselho Regional de Nutricionistas 1ª Região (CRN-1)
                      lançou, neste Dia do Orgulho LGBTQI+, o Guia de cuidado e
                      atenção nutricional à população LGBTQIA+. O material faz
                      uma breve apresentação sobre as pessoas LGBTQIA+,
                      mostrando perfil sociodemográfico da comunidade e as
                      condições de vida e saúde. Dessa forma, aborda a temática
                      das atenções nutricionais que devem ser tomadas em suas 38
                      páginas.
                    </p>
                  </div>
                </a>
                <a
                  className="artigo"
                  href="https://www.poupatrans.org.br/passoapasso"
                >
                  <div className="artigo-body">
                    <h2 className="article-title">
                      Passo a passo, elaborado pelo Poupatrans, para te ajudar a
                      conseguir os documentos necessários para a Retificação de
                      PRENOME e GÊNERO nos seus documentos.
                    </h2>
                  </div>
                </a>
              </div>

              <div className="column">
                <a
                  className="artigo"
                  href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8727.htm"
                >
                  <div className="artigo-body">
                    <h2 className="artigo-title">
                      DECRETO Nº 8.727, DE 28 DE ABRIL DE 2016
                    </h2>
                    <p className="artigo-content">
                      Dispõe sobre o uso do nome social e o reconhecimento da
                      identidade de gênero de pessoas travestis e transexuais no
                      âmbito da administração pública federal direta, autárquica
                      e fundacional.
                    </p>
                  </div>
                </a>
                <a
                  className="artigo"
                  href="https://leisestaduais.com.br/mg/lei-ordinaria-n-23654-2020-minas-gerais-acrescenta-o-art-74-a-a-lei-n-13317-de-24-de-setembro-de-1999-que-contem-o-codigo-de-saude-do-estado-de-minas-gerais"
                >
                  <div className="artigo-body">
                    <h2 className="artigo-title">
                      LEI 23654, DE 09 DE JUNHO DE 2020
                    </h2>
                    <p className="artigo-content">
                      Acrescenta o art. 74-A à Lei nº 13.317, de 24 de setembro
                      de 1999, que contém o Código de Saúde do Estado de Minas
                      Gerais. (...) "Art. 74-A. As restrições, as normas, os
                      requisitos e os critérios para doação de sangue serão
                      aplicados igualmente a todos, sem distinção
                      discriminatória de cor, raça, orientação sexual,
                      identidade de gênero, entre outros, avaliando-se
                      justificadamente as condutas individuais visando à
                      proteção da saúde pública.". (...)
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Dados;
