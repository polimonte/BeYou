import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Vagas from "./pages/empregabilidade/vagasDeEmprego/index";
import Capacitacao from "./pages/empregabilidade/capacitacao/index";
import Procurar from "./pages/empregabilidade/ondeProcurar/index"
import Acolhimento from "./pages/acolhimento/index"
import EncontreUmaCasa from "./pages/acolhimento/encontreUmaCasa/index"
import IndiqueUmaCasa from "./pages/acolhimento/indiqueUmaCasa/index"
<<<<<<< HEAD
import Parceiro from "./pages/sobreNos/sejaUmParceiro/index"
=======
>>>>>>> 8933722 ('Finalizando-Projeto')
import Voluntario from "./pages/sobreNos/sejaUmVoluntario/index"
import Mvv from "./pages/sobreNos/missaoVisaoValores/index"
import Legais from "./pages/informacoes/informacoesLegais/index"
import Dados from "./pages/informacoes/dadosImportantes"
import Admin from "./pages/admin/telaLogin/index"
import Area from "./pages/admin/adminArea/index"
import CadastrarVagas from "./pages/cadastrar/cadastrarVagas/index"
import CadastrarCursos from "./pages/cadastrar/cadastrarCursos/index"
import CasasIndicadas from "./pages/ver/casasIndicadas/index"
import CandidatosVoluntarios from "./pages/ver/candidatosVoluntarios/index";
<<<<<<< HEAD
import CandidatosParceiros from "./pages/ver/candidatosParceiros/index"
=======
import VagasIndicadas from "./pages/ver/vagasIndicadas/index"
>>>>>>> 8933722 ('Finalizando-Projeto')
import CursosIndicados from "./pages/ver/CursosIndicados/index"
import SobreBeYou from "./pages/sobreNos/conhecaBeYou/index"

export default () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/empregabilidade/vagas-de-emprego">
          <Vagas />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/empregabilidade/capacitacao-e-cursos">
          <Capacitacao />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/empregabilidade/onde-procurar">
          <Procurar />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/acolhimento">
          <Acolhimento />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/acolhimento/encontre-uma-casa">
          <EncontreUmaCasa />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/acolhimento/indique-uma-casa">
          <IndiqueUmaCasa />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/acolhimento/editar-casa/:id">
          <IndiqueUmaCasa/>
        </Route>
      </Switch>

      <Switch>
<<<<<<< HEAD
        <Route exact path="/sobre-nos/seja-um-parceiro">
          <Parceiro />
        </Route>
      </Switch>

      <Switch>
=======
>>>>>>> 8933722 ('Finalizando-Projeto')
        <Route exact path="/sobre-nos/seja-um-voluntario">
          <Voluntario />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/sobre-nos/missao-visao-valores">
          <Mvv />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/sobre-nos/be-you">
          <SobreBeYou />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/informacoes/informacoes-legais">
          <Legais />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/informacoes/dados-importantes">
          <Dados />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/admin-login">
          <Admin />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/admin-area">
          <Area />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/admin/cadastrar-vagas-de-emprego">
          <CadastrarVagas />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/admin/cadastrar-cursos">
          <CadastrarCursos />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/admin/editar-curso/:id">
          <CadastrarCursos/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/admin/ver-casas-indicadas">
          <CasasIndicadas />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/admin/ver-candidatos-voluntarios">
          <CandidatosVoluntarios />
        </Route>
      </Switch>

      <Switch>
<<<<<<< HEAD
        <Route exact path="/admin/ver-candidatos-parceiros">
          <CandidatosParceiros />
=======
        <Route exact path="/admin/ver-vagas-indicadas">
          <VagasIndicadas />
>>>>>>> 8933722 ('Finalizando-Projeto')
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/admin/ver-cursos-indicados">
          <CursosIndicados />
        </Route>
      </Switch>

    </>
  );
};
