import React from "react";
import LogoImage from "../image/logo.png";
import "./nav1web.css";
import Navbar2 from "./Navbar2";


function Navbar1Web() {
  var logo='</> CodingWithApon'

  return (
    <React.Fragment>
      <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" target="_blank">
                <h3 className="logo"> {logo} </h3>
                </a>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto py-4 py-md-0">
                 
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">
                        Agency
                      </a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">
                        Journal
                      </a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <Navbar2 />

            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Navbar1Web;
