import React, { useEffect, useState } from "react";
import "../../../components/css/layout.css";
import CursosService from "../../../services/CursosService";
import "./styles.css";

const Capacitacao = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {

    getTodosOsCursos();
  }, [])

  const getTodosOsCursos = () => {
    CursosService.getAllCursos().then((response) => {
      setCursos(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
        <section className="overflow">
          <table className="table table_capacitacao">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Instituição</th>
                <th scope="col">Curso</th>
                <th scope="col">Cidade</th>
                <th scope="col">Duração</th>
                <th scope="col">Turno</th>
              </tr>
            </thead>
            <tbody>
              {
                cursos.map(
                  cursos =>
                    <tr key={cursos.id}>
                      <th scope="row"> {cursos.id} </th>
                      <td> {cursos.nomeInstituicao} </td>
                      <td> {cursos.nomeCurso} </td>
                      <td> {cursos.estadoCidade} </td>
                      <td> {cursos.duracao} </td>
                      <td> {cursos.turno} </td>
                      <td>
                        <button type="button" className="btn btn-outline-secondary candidatar">
                          Candidatar-me
                        </button>
                      </td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}


export default Capacitacao;
