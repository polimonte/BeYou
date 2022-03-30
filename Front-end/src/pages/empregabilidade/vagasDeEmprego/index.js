import React, { useEffect, useState } from "react";
import "../../../components/css/layout.css";
import EmpregosService from "../../../services/EmpregosService";
import "./style.css";

const Vagas = () => {

  const [empregos, setEmpregos] = useState([]);

  useEffect(() => {

    getTodosOsEmpregos();
  }, [])


  const getTodosOsEmpregos = () => {
    EmpregosService.getAllEmpregos().then((response) => {
      setEmpregos(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
        <section className="overflow">
          <table className="table table_vagas">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Empresa</th>
                <th scope="col">Cargo</th>
                <th scope="col">Cidade</th>
                <th scope="col">Salario</th>
                <th scope="col">Benefícios</th>
              </tr>
            </thead>
            <tbody>
              {
                empregos.map(
                  emprego =>
                    <tr key={emprego.id}>
                      <th scope="row"> {emprego.id} </th>
                      <td>{emprego.nomeEmpresa} </td>
                      <td> {emprego.cargo} </td>
                      <td> {emprego.estadoCidade} </td>
                      <td> {emprego.salario} </td>
                      <td> {emprego.beneficios} </td>
                      <td id="btn-vagas">
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


export default Vagas;
