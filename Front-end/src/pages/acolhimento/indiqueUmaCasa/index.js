import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../../components/css/layout.css";
import CasasAcolhimentoService from "../../../services/CasasAcolhimentoService";
import "./style.css";

const IndiqueUmaCasa = () => {

  const [nomeCasa, setNomeCasa] = useState('')
  const [site, setSite] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateCasa = (e) => {
    e.preventDefault();
    const casa = { nomeCasa, site, estado, cidade }

    if (id) {
      CasasAcolhimentoService.updateCasa(id, casa).then((response) => {
        alert("Informações atualizadas!");
        history.push("/admin/ver-casas-indicadas")
      }).catch(error => {
        console.log(error);
      })
    } else {
      CasasAcolhimentoService.createCasa(casa).then((response) => {
        console.log(response.data);
        alert("Casa de Acolhimento cadastrada com sucesso!")
        history.push("/acolhimento")
      }).catch(error => {
        console.log(error);
      })
    }
  }

  useEffect(() => {

    CasasAcolhimentoService.getCasasPorId(id).then((response) => {
      setNomeCasa(response.data.nomeCasa)
      setSite(response.data.site)
      setEstado(response.data.estado)
      setCidade(response.data.cidade)
    }).catch(error => {
      console.log(error);
    })

  }, [])

  const title = () => {
    if (id) {
      return <h2> Atualizar informações da Casa de Acolhimento. </h2>
    } else {
      return <h2 id="descricao">
        Diga-nos o nome da casa de acolhimento que você deseja indicar e
        um endereço eletrônico, pode ser site, facebook, instagram, etc.
      </h2>
    }
  }

  return (
    <>
      <main>
        <section>
          <div className="fundo">
            {title()}

            <form class="dados">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                placeholder="Nome da casa de acolhimento.."
                name="nomeCasa"
                value={nomeCasa}
                onChange={(e) => setNomeCasa(e.target.value)}
              />

              <label htmlFor="Site">Site</label>
              <input
                type="text"
                placeholder="Site, facebook, instagram..."
                name="site"
                value={site}
                onChange={(e) => setSite(e.target.value)}
              />

              <label htmlFor="Estado">Estado</label>
              <input
                type="text"
                placeholder="Estado da casa de acolhimento.."
                name="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />

              <label htmlFor="Site">Cidade</label>
              <input
                type="text"
                placeholder="Cidade da casa de acolhimento.."
                name="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />

              <input type="submit" value="Enviar" onClick={(e) => saveOrUpdateCasa(e)} />
            </form>
          </div>
        </section>
      </main>
    </>
  );
}


export default IndiqueUmaCasa;
