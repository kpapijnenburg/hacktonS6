import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormBuilder from 'react-form-builder2';

class Onderzoekers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormBuilder: false,
    };
  }

  divStyle = {
    margin: '10px',
    width: '70%'
  }

  formbuilderStyle = {
    width: '100%'
  }

  showFormulierBuilder = () => {
    const { showFormBuilder } = this.state;
    if (showFormBuilder === false) {
      this.setState({ showFormBuilder: true });
    } else {
      this.setState({ showFormBuilder: false });
    }
  }

  render() {
    const { showFormBuilder } = this.state;

    return (
      <section class="col">
        {showFormBuilder === false ? (
          <div>
            <button class="btn btn-primary" type="button" onClick={this.showFormulierBuilder} >
              Nieuw onderzoek starten
            </button>
            <p className="lead mt-3">Actieve onderzoeken</p>
            <table class="table table-hover">
              <thead class="thead-dark">
                <tr>
                  <th class="col" scope="col">
                    Onderzoeksnaam
              </th>
                  <th class="col" scope="col">
                    Aantal testpersonen
              </th>
                  <th class="col" scope="col">
                    Acties
              </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h3>Eenzaamheid in Nederland</h3>
                  </td>
                  <td>129109</td>
                  <td>
                    <Link to="/onderzoekers">
                      <button class="btn btn-info">Data inzien</button>
                    </Link>
                    <button class="btn btn-light">Wijzigen</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Gameverslaving in Nederland</h3>
                  </td>
                  <td>1387290</td>
                  <td>
                    <Link to="/onderzoekers">
                      <button class="btn btn-info">Data inzien</button>
                    </Link>
                    <button class="btn btn-light">Wijzigen</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Vermogen van de gemiddelde Nederlander</h3>
                  </td>
                  <td>982139</td>
                  <td>
                    <Link to="/onderzoekers">
                      <button class="btn btn-info">Data inzien</button>
                    </Link>
                    <button class="btn btn-light">Wijzigen</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Inactieve onderzoeken</h2>
            <table class="table table-hover">
              <thead class="thead-dark">
                <tr>
                  <th class="col" scope="col">
                    Onderzoeksnaam
              </th>
                  <th class="col" scope="col">
                    Aantal testpersonen
              </th>
                  <th class="col " scope="col">
                    Acties
              </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h3>Cyberpesten bij jongeren</h3>
                  </td>
                  <td>677899</td>
                  <td>
                    <Link to="/onderzoekers">
                      <button class="btn btn-info">Data inzien</button>
                    </Link>
                    <button
                      style={{ cursor: "not-allowed" }}
                      class="btn btn-light"
                      disabled
                    >
                      Wijzigen
                </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Social media veslaving</h3>
                  </td>
                  <td>3120209</td>
                  <td>
                    <Link to="/onderzoekers">
                      <button class="btn btn-info">Data inzien</button>
                    </Link>
                    <button
                      style={{ cursor: "not-allowed" }}
                      class="btn btn-light"
                      disabled
                    >
                      Wijzigen
                </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Seksuele voorlichting op basisscholen in Nederland</h3>
                  </td>
                  <td>998789</td>
                  <td>
                    <Link to="/onderzoekers">
                      <button class="btn btn-info">Data inzien</button>
                    </Link>
                    <button
                      style={{ cursor: "not-allowed" }}
                      class="btn btn-light disabled-button"
                      disabled
                    >
                      Wijzigen
                </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
            <div>
              <button class="btn btn-primary" type="button" onClick={this.showFormulierBuilder} >
                Terug
              </button>
              <div>
                <h1>Creëer dynamisch form</h1>
                <div class="clearfix" divStyle>
                  <button class="btn btn-primary" id="button-preview">Preview Form</button>
                  <div class="modal" id="preview-dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-body">
                          <div id="form-generator"></div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal" id="button-close">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <FormBuilder.ReactFormBuilder />
                </div>
              </div>
            </div>
          )}
      </section>
    );
  }
}

export default Onderzoekers;
