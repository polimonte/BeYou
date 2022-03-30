import React, { useEffect, useState } from "react";
import "./style.css";
import CursosService from "../../../services/CursosService";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CadastrarCursos = () => {

  const [nomeInstituicao, setNomeInstituicao] = useState('');
  const [nomeCurso, setNomeCurso] = useState('');
  const [estadoCidade, setEstadoCidade] = useState('')
  const [duracao, setDuracao] = useState('');
  const [turno, setTurno] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateCurso = (e) => {
    e.preventDefault();

    const curso = { nomeInstituicao, nomeCurso, estadoCidade, duracao, turno };

    if (id) {
      CursosService.updateCursos(id, curso).then((response) => {
        alert("Informações atualizadas!")
        history.push("/admin/ver-cursos-indicados")
      }).catch(error => {
        console.log(error)
      })
    } else {
      CursosService.createCursos(curso).then((response) => {
        console.log(response.data);
        alert("Curso cadastrado com sucesso!");
        history.push("/admin-area")
      }).catch(error => {
        console.log(error);
      })
    }
  }

  useEffect(() => {

    CursosService.getCursosPorId(id).then((response) => {
      setNomeInstituicao(response.data.nomeInstituicao)
      setNomeCurso(response.data.nomeCurso)
      setEstadoCidade(response.data.estadoCidade)
      setDuracao(response.data.duracao)
      setTurno(response.data.turno)
    }).catch(error => {
      console.log(error);
    })
  }, [])

  const title = () => {
    if (id) {
      return <h2> Atualizar informações do Curso </h2>
    } else {
      return <h2>Cadastre uma oportunidade.</h2>
    }
  }


  return (
    <>
      <main>
        <section className="principal primeiro__bloco__cadastrar__curso">
          <div className="descricao">
            {title()}
            <h5>
              (As oportunidades cadastradas ficarão visíveis pro usuário na
              página "Capacitação / Cursos")
            </h5>
          </div>

          <form className="dados">
            <label htmlFor="escola">Instituição</label>
            <input
              type="text"
              placeholder="Nome da instituição do curso.."
              name="nomeInstituicao"
              value={nomeInstituicao}
              onChange={(e) => setNomeInstituicao(e.target.value)}
            />

            <label htmlFor="curso">Curso</label>
            <input
              type="text"
              placeholder="Curso disponível..."
              name="nomeCurso"
              value={nomeCurso}
              onChange={(e) => setNomeCurso(e.target.value)}
            />

            <label htmlFor="cidade">Cidade - UF</label>
            <input
              type="text"
              placeholder="Ex: São Paulo - SP.."
              name="estadoCidade"
              value={estadoCidade}
              onChange={(e) => setEstadoCidade(e.target.value)}
            />

            <label htmlFor="duracao">Duração</label>
            <input
              type="text"
              placeholder="Duração do curso.."
              name="duracao"
              value={duracao}
              onChange={(e) => setDuracao(e.target.value)}
            />

            <label htmlFor="turno">Turno</label>
            <input
              type="text"
              placeholder="Turno do curso.."
              name="turno"
              value={turno}
              onChange={(e) => setTurno(e.target.value)}
            />

            <input type="submit" value="Enviar" onClick={(e) => saveOrUpdateCurso(e)} />
          </form>
        </section>
      </main>
    </>
  );
}

export default CadastrarCursos;
