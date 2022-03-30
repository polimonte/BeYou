import React, { useEffect, useState } from "react";
import ParceirosService from "../../../services/ParceirosService";
import "./style.css";


const CandidatosParceiros = () => {

  const [parceiros, setParceiros] = useState([])

  useEffect(() => {

    getTodosOsParceiros();
  }, [])


  const getTodosOsParceiros = () => {
    ParceirosService.getAllParceiros().then((response) => {
      setParceiros(response.data);
      console.log(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
        <section className="overflow">
          <table class="table table__parceiros">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
                <th scope="col">Mensagem</th>
              </tr>
            </thead>
            <tbody>
              {
                parceiros.map(
                  parceiro =>
                    <tr key={parceiro.id}>
                      <th scope="row"> {parceiro.id} </th>
                      <td> {parceiro.nomeparceiro} </td>
                      <td> {parceiro.email} </td>
                      <td> {parceiro.telefone} </td>
                      <td> {parceiro.mensagem} </td>
                    </tr>
                )
              }
              <tr>
                <th scope="row">1</th>
                <td>Parceiro 1</td>
                <td>fake@falso.com</td>
                <td>Telefone</td>
                <td>bdusbabudbfyabubsdbcc</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Parceiro 2</td>
                <td>fake@falso.com</td>
                <td>Telefone</td>
                <td>bdusbabudbfyabubsdbcc</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Parceiro 3</td>
                <td>fake@falso.com</td>
                <td>Telefone</td>
                <td>bdusbabudbfyabubsdbcc</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Parceiro 4</td>
                <td>fake@falso.com</td>
                <td>Telefone</td>
                <td>bdusbabudbfyabubsdbcc</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Parceiro 5</td>
                <td>fake@falso.com</td>
                <td>Telefone</td>
                <td>bdusbabudbfyabubsdbcc</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Parceiro 6</td>
                <td>fake@falso.com</td>
                <td>Telefone</td>
                <td>bdusbabudbfyabubsdbcc</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Parceiro 7</td>
                <td>fake@falso.com</td>
                <td>Telefone</td>
                <td>bdusbabudbfyabubsdbcc</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}


export default CandidatosParceiros;