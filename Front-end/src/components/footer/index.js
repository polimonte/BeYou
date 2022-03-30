import React, { Component } from "react";
import { Link, link } from "react-router-dom";

import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";
import youtube from "../../assets/img/youtube.png";
import facebook from "../../assets/img/facebook.png";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <section className="container-5">
            <div className="fim">
                <Link to="/">
                  <img id="insta" src={instagram} />
                </Link>
                <Link to="/">
                  <img id="face" src={facebook} />
                </Link>
                <Link to="/">
                  <img id="twitter" src={twitter} />
                </Link>
                <Link to="/">
                  <img id="youtube" src={youtube} />
                </Link>
              </div>
          </section>
        </footer>
      </>
    );
  }
}

export default Footer;
