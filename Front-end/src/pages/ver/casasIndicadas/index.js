import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CasasAcolhimentoService from "../../../services/CasasAcolhimentoService";
import "./style.css";
<<<<<<< HEAD
=======
import Delete from "../../../assets/img/delete-icon.svg"
import Edit from "../../../assets/img/edit-icon.svg"
>>>>>>> 8933722 ('Finalizando-Projeto')

const CasasIndicadas = () => {

  const [casas, setCasas] = useState([])

  useEffect(() => {

    getTodasAsCasas();
  }, [])


  const getTodasAsCasas = () => {
    CasasAcolhimentoService.getAllCasas().then((response) => {
      setCasas(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteCasa = (casasId) => {
    CasasAcolhimentoService.deleteCasa(casasId).then((response) => {
      getTodasAsCasas();
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
<<<<<<< HEAD
        <section>
          <table className="table table__casas">
            <thead>
              <tr>
                <th scope="col">#</th>
=======
        <section className="table__overflow">
          <table className="table table__casas">
            <thead>
              <tr>
>>>>>>> 8933722 ('Finalizando-Projeto')
                <th scope="col">Casa de Acolhimento</th>
                <th scope="col">Site</th>
                <th scope="col">Estado</th>
                <th scope="col">Cidade</th>
<<<<<<< HEAD
=======
                <th scope="col">Editar / Deletar</th>
>>>>>>> 8933722 ('Finalizando-Projeto')
              </tr>
            </thead>
            <tbody>
              {
                casas.map(
                  casa =>
<<<<<<< HEAD
                    <tr key={casa.id}>
                      <th scope="row"> {casa.id} </th>
=======
                    <tr key={casa.id}>                      
>>>>>>> 8933722 ('Finalizando-Projeto')
                      <td> {casa.nomeCasa} </td>
                      <td> {casa.site} </td>
                      <td> {casa.estado} </td>
                      <td> {casa.cidade} </td>
                      <td>
<<<<<<< HEAD
                        <Link className="btn btn-info" to={`/acolhimento/editar-casa/${casa.id}`}> Update </Link>
                        <button className='btn btn-danger' onClick={() => deleteCasa(casa.id)}
                        > Delete </button>
=======
                        <Link className="btn btn-info btn__funcoes btn__color-edit" to={`/acolhimento/editar-casa/${casa.id}`}><img src={Edit}></img></Link>
                        <button className='btn btn-danger btn__funcoes btn__color-delete' onClick={() => deleteCasa(casa.id)}
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

export default CasasIndicadas;
