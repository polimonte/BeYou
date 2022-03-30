import React, { useState } from "react";
import "../../../components/css/layout.css";
import VoluntariosService from "../../../services/VoluntariosService";
import "./style.css";

const Voluntario = () => {

  const [nomeVoluntario, setNomeVoluntario] = useState('')
  const [idade, setIdade] = useState()
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')

  const saveVoluntario = (e) => {
    e.preventDefault();

    const voluntario = {nomeVoluntario, idade, email, telefone, mensagem};

    VoluntariosService.createVoluntario(voluntario).then((response) => {
      console.log(response.data);
      alert("Informações enviadas com sucesso!");
      setNomeVoluntario('')
      setIdade()
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
              Quer ser um voluntário? Acha que suas experiências e vivências
              podem ser úteis? É profissional de alguma areae tem ideias a
              compartilhar? entre em contato com a gente! Precisamos de você!
            </h2>

            <form className="dados">
              <label htmlFor="nome">Nome</label>
              <input 
                type="text" 
                placeholder="Digite seu nome completo.."
                name="nomeVoluntario"
                value={nomeVoluntario}
                onChange={(e) => setNomeVoluntario(e.target.value)}
              />

              <label htmlFor="idade">Idade</label>
              <input 
                type="text" 
                placeholder="Digite sua idade"
                name="idade"
                value={idade}
                onChange={(e) => setIdade(parseInt(e.target.value))}
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
                placeholder="Conte-nos um pouco sobre você e como poderia nos ajudar nessa jornada.."
                className="textArea"
                name="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>

              <input type="submit" value="Enviar" onClick={(e) => saveVoluntario(e)} />
            </form>

          </div>
        </section>
      </main>
    </>
  );
}


export default Voluntario;
