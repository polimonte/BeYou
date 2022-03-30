import React, { Component } from "react";
import "../../../components/css/layout.css";
import "./style.css";
import vagas from "../../../assets/img/vagas.png"
import infojobs from "../../../assets/img/infojobs.jpg"
import getNinjas from "../../../assets/img/getNinjas.png"

class Procurar extends Component {
  render() {
    return (
      <>
        <main>
          <section>
            <div className="card-group bloco__1__onde-procurar">
              <div className="card">
                <a href="https://www.vagas.com.br/" target="_blank">
                  <img src={vagas} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Vagas.com</h5>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium corrupti rerum perferendis, officiis nesciunt
                    quisquam illum? Facere repellendus maxime id nemo eveniet
                    iusto.
                  </p>
                </div>
              </div>

              <div className="card">
                <a href="https://www.infojobs.com.br/" target="_blank">
                  <img src={infojobs} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">InfoJobs</h5>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium corrupti rerum perferendis, officiis nesciunt
                    quisquam illum? Facere repellendus maxime id nemo eveniet
                    iusto.
                  </p>
                </div>
              </div>

              <div className="card">
                <a href="https://www.getninjas.com.br/" target="_blank">
                  <img src={getNinjas} className="card-img-top" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Get Ninjas</h5>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium corrupti rerum perferendis, officiis nesciunt
                    quisquam illum? Facere repellendus maxime id nemo eveniet
                    iusto.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Procurar;
