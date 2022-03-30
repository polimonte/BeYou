import React, { useEffect, useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import EmpregosService from "../../../services/EmpregosService";
import { useParams } from "react-router-dom";

const CadastrarVagas = () => {

  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [estadoCidade, setEstadoCidade] = useState('');
  const [salario, setSalario] = useState('');
  const [beneficios, setBeneficios] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const recarregar = () =>{
    setNomeEmpresa('')
    setCargo('')
    setEstadoCidade('')
    setSalario('')
    setBeneficios('')
  }

  const saveOrUpdateEmprego = (e) => {
    e.preventDefault();

    const emprego = { nomeEmpresa, cargo, estadoCidade, salario, beneficios };

    if (id) {
      EmpregosService.updateEmpregos(id, emprego).then((response) => {
        alert("Informações atualizadas!")
      }).catch(error => {
        console.log(error);
      })
    } else {
      EmpregosService.createEmpregos(emprego).then((response) => {
        console.log(response.data);
        alert("Vaga de emprego cadastrada com sucesso!");
        history.push("/admin-area");
      }).catch(error => {
        console.log(error);
      })
    }
  }

  useEffect(() => {
  
    EmpregosService.getEmpregosPorId(id).then((response) => {
      setNomeEmpresa(response.data.nomeEmpresa)
      setCargo(response.data.cargo)
      setEstadoCidade(response.data.estadoCidade)
      setSalario(response.data.salario)
      setBeneficios(response.data.beneficios)
    }).catch(error => {
      console.log(error);
    })
  }, [])
  
  const title = () => {
    if (id) {
        return <h2> Atualizar informações da vaga de emprego </h2>
    } else {
        return <h2>Cadastre uma vaga de emprego.</h2>
    }
}

  return (
    <>
      <main>
        <section className="principal primeiro__bloco__cadastrar__vaga">
          <div className="descricao">
            {title()}
            <h5>
              (As vagas cadastradas ficarão visíveis pro usuário na página
              "Vagas de emprego")
            </h5>
          </div>

          <form className="dados">
            <label htmlFor="empresa">Empresa</label>
            <input
              type="text"
              placeholder="Nome da empresa contratante.."
              name="nomeEmpresa"
              value={nomeEmpresa}
              onChange={(e) => setNomeEmpresa(e.target.value)}
            />

            <label htmlFor="cargo">Cargo</label>
            <input
              type="text"
              placeholder="Cargo disponível..."
              name="cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />

            <label htmlFor="cidade">Cidade - UF</label>
            <input
              type="text"
              placeholder="Ex: São Paulo - SP.."
              name="estadoCidade"
              value={estadoCidade}
              onChange={(e) => setEstadoCidade(e.target.value)}
            />

            <label htmlFor="salario">Salário</label>
            <input
              type="text"
              placeholder="Salário oferecido.."
              name="salario"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
            />

            <label htmlFor="beneficio">Benefícios</label>
            <input
              type="text"
              placeholder="Benefícios oferecidos.."
              name="beneficios"
              value={beneficios}
              onChange={(e) => setBeneficios(e.target.value)}
            />

            <input type="submit" value="Enviar" onClick={(e) => saveOrUpdateEmprego(e)} />
          </form>
        </section>
      </main>
    </>
  );
}

export default CadastrarVagas

