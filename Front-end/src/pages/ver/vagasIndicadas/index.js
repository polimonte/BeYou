import React, { useEffect, useState } from "react";
import ParceirosService from "../../../services/ParceirosService";
import "./style.css";
import Delete from "../../../assets/img/delete-icon.svg";
import Edit from "../../../assets/img/edit-icon.svg";

const VagasIndicadas = () => {
  const [parceiros, setParceiros] = useState([]);

  useEffect(() => {
    getTodosOsParceiros();
  }, []);

  const getTodosOsParceiros = () => {
    ParceirosService.getAllParceiros()
      .then((response) => {
        setParceiros(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main>
        <section className="overflow">
          <table class="table table__vagas__indicadas">
            <thead>
              <tr>
                <th scope="col">Empresa</th>
                <th scope="col">Cargo</th>
                <th scope="col">Cidade</th>
                <th scope="col">Salario</th>
                <th scope="col">Benefícios</th>
                <th scope="col">Editar / Deletar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parceiro 1</td>
                <td>fake@falso.com</td>
                <td>Telefone</td>
                <td>bdusbabudbfyabubsdbcc</td>
                <td>sasuahshaushauhsaus</td>
                <td>
                  <button className="btn btn-info btn__funcoes btn__color-edit">
                    <img src={Edit}></img>
                  </button>
                  <button className="btn btn-danger btn__funcoes btn__color-delete">
                    <img src={Delete}></img>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default VagasIndicadas;
