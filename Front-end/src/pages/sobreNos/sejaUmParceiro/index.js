import React, { useState } from "react";
import "../../../components/css/layout.css";
import ParceirosService from "../../../services/ParceirosService";
import "./style.css";

const Parceiro = () => {

  const [nomeParceiro, setNomeParceiro] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')

  const saveParceiro = (e) =>{
    e.preventDefault();

    const parceiro = {nomeParceiro, email, telefone, mensagem};

    ParceirosService.createParceiros(parceiro).then((response) => {
      console.log(response.data)
      alert("Informações foram enviadas com sucesso!");
      setNomeParceiro('')
      setEmail('')
      setTelefone('')
      setMensagem('')
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <main>
        <section>
          <div className="fundo">
            <h2 id="descricao">
              Possui ou representa uma empresa, escola, curso, etc?
              Possui Vagas disponíveis? Tem ideias a compartilhar?
              Quer contribuir com a gente? Precisamos de você !
            </h2>

            <form className="dados">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome ou o nome da empresa.."
                name="nomeParceiro"
                value={nomeParceiro}
                onChange={(e) => setNomeParceiro(e.target.value)}
              />

              <label htmlFor="email" id="email-0">
                E-mail
              </label>
              <input 
                type="text" 
                placeholder="Digite seu email.." 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="phone" id="telefone-0">
                Telefone
              </label>
              <input 
                type="text" 
                placeholder="(DDD) Telefone" 
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />

              <label htmlFor="mensagem">Como gostaria de nos ajudar?</label>
              <textarea
                placeholder="Diga-nos um pouco sobre suas ideias e aguarde nosso contato (Não demoraremos).."
                className="textArea"
                name="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>

              <input type="submit" value="Enviar" onClick={(e) => saveParceiro(e)}/>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}


export default Parceiro;
