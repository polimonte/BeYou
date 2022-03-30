import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CursosService from "../../../services/CursosService";
import "./style.css";
<<<<<<< HEAD
=======
import Delete from "../../../assets/img/delete-icon.svg"
import Edit from "../../../assets/img/edit-icon.svg"
>>>>>>> 8933722 ('Finalizando-Projeto')

const CursosIndicados = () => {

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

  const deleteCurso = (cursoId) => {
    CursosService.deleteCursos(cursoId).then((response) => {
      getTodosOsCursos();
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
        <section className="overflow">
          <table className="table table__cursos">
            <thead>
              <tr>
<<<<<<< HEAD
                <th scope="col">#</th>
=======
>>>>>>> 8933722 ('Finalizando-Projeto')
                <th scope="col">Instituição</th>
                <th scope="col">Curso</th>
                <th scope="col">Cidade - UF</th>
                <th scope="col">Duração</th>
                <th scope="col">Turno</th>
<<<<<<< HEAD
=======
                <th scope="col">Editar / Deletar</th>
>>>>>>> 8933722 ('Finalizando-Projeto')
              </tr>
            </thead>
            <tbody>
              {
                cursos.map(
                  cursos =>
                    <tr key={cursos.id}>
<<<<<<< HEAD
                      <th scope="row"> {cursos.id} </th>
=======
>>>>>>> 8933722 ('Finalizando-Projeto')
                      <td> {cursos.nomeInstituicao} </td>
                      <td> {cursos.nomeCurso} </td>
                      <td> {cursos.estadoCidade} </td>
                      <td> {cursos.duracao} </td>
                      <td> {cursos.turno} </td>
                      <td>
<<<<<<< HEAD
                        <Link className="btn btn-info" to={`/admin/editar-curso/${cursos.id}`}> Update </Link>
                        <button className='btn btn-danger' onClick={() => deleteCurso(cursos.id)}
                          > Delete </button>
=======
                        <Link className="btn btn-info btn__funcoes btn__color-edit" to={`/admin/editar-curso/${cursos.id}`}><img src={Edit}></img></Link>
                        <button className='btn btn-danger btn__funcoes btn__color-delete' onClick={() => deleteCurso(cursos.id)}
                          ><img src={Delete}></img></button>
>>>>>>> 8933722 ('Finalizando-Projeto')
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


export default CursosIndicados;
