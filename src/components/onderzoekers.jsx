import React, { Component } from "react";
import Switch from "react-switch";
import ResearchChart from "./onderzoek_chart";
import FormBuilder from "react-form-builder2";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/react-form-builder2/dist/app.css";

class Onderzoekers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormBuilder: false,
      showGraph: false
    };
  }

  divStyle = {
    margin: "10px",
    width: "70%"
  };

  formbuilderStyle = {
    width: "100%"
  };


  showFormulierBuilder = () => {
    const { showFormBuilder } = this.state;
    if (showFormBuilder === false) {
      this.setState({ showFormBuilder: true });
    } else {
      this.setState({ showFormBuilder: false });
    }
  };

  showGraph = () => {
    const { showGraph } = this.state;
    if (showGraph === false) {
      this.setState({ showGraph: true });
    } else {
      this.setState({ showGraph: false });
    }
  };

  handleChange() { }

  render() {
    const { showFormBuilder, showGraph } = this.state;

    return (
      <section class="col">
        {showFormBuilder === false && showGraph === false ? (
          <div>
            <div>
              <button
                class="btn btn-primary"
                type="button"
                onClick={this.showFormulierBuilder}
              >
                Nieuw onderzoek starten
              </button>
            </div>
            <p className="lead mt-3">Actieve onderzoeken</p>
            <table class="table table-hover">
              <thead class="thead-dark">
                <tr>
                  <th class="col" scope="col">
                    Onderzoeksnaam
                  </th>
                  <th class="col" scope="col">
                    Actief
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
                  <td>
                    <Switch disabled onChange={this.handleChange} checked={false} />
                  </td>
                  <td>0</td>
                  <td>
                    <button
                      class="btn btn-dark"
                      type="button"
                    >
                      Start Onderzoek
                  </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={this.showGraph}
                    >
                      Grafiek Data Inzien
                  </button>
                    <button class="btn btn-light">Wijzig Eigenschappen</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Gameverslaving in Nederland</h3>
                  </td>
                  <td>
                    <Switch onChange={this.handleChange} checked={true} />
                  </td>
                  <td>13872</td>
                  <td>
                    <button
                      class="btn btn-danger"
                      type="button"
                    >
                      Sluit Onderzoek
                  </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={this.showGraph}
                    >
                      Grafiek Data Inzien
                  </button>
                    <button class="btn btn-light">Wijzig Eigenschappen</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Vermogen van de gemiddelde Nederlander</h3>
                  </td>
                  <td>
                    <Switch onChange={this.handleChange} checked={false} />
                  </td>
                  <td>98213</td>
                  <td>
                    <button
                      class="btn btn-danger"
                      type="button"
                    >
                      Sluit Onderzoek
                  </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={this.showGraph}
                    >
                      Grafiek Data Inzien
                  </button>
                    <button class="btn btn-light">Wijzig Eigenschappen</button>
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
                    Actief
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
                  <td>
                    <Switch disabled checked={false} />
                  </td>
                  <td>677899</td>
                  <td>
                    <button
                      style={{ cursor: "not-allowed" }}
                      class="btn btn-dark"
                      type="button"
                      disabled
                    >
                      Start Onderzoek
                  </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={this.showGraph}
                    >
                      Grafiek Data Inzien
                  </button>
                    <button
                      style={{ cursor: "not-allowed" }}
                      class="btn btn-light"
                      disabled
                    >
                      Wijzig Eigenschappen
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Social media veslaving</h3>
                  </td>
                  <td>
                    <Switch disabled checked={false} />
                  </td>
                  <td>3120209</td>
                  <td>
                    <button
                      style={{ cursor: "not-allowed" }}
                      class="btn btn-dark"
                      type="button"
                      disabled
                    >
                      Start Onderzoek
                  </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={this.showGraph}
                    >
                      Grafiek Data Inzien
                  </button>
                    <button
                      style={{ cursor: "not-allowed" }}
                      class="btn btn-light"
                      disabled
                    >
                      Wijzig Eigenschappen
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Seksuele voorlichting op basisscholen in Nederland</h3>
                  </td>
                  <td>
                    <Switch disabled checked={false} />
                  </td>
                  <td>998789</td>
                  <td>
                    <button
                      style={{ cursor: "not-allowed" }}
                      class="btn btn-dark"
                      type="button"
                      disabled
                    >
                      Start Onderzoek
                  </button>
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={this.showGraph}
                    >
                      Grafiek Data Inzien
                  </button>
                    <button
                      style={{ cursor: "not-allowed" }}
                      class="btn btn-light disabled-button"
                      disabled
                    >
                      Wijzig Eigenschappen
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : showFormBuilder === true && showGraph === false ? (
          <div>
            <div>
              <button
                class="btn btn-primary"
                type="button"
                onClick={this.showFormulierBuilder}
              >
                Terug
            </button>
              <button
                class="btn btn-primary"
                type="button"
                style={{ float: "right" }}
              >Preview Onderzoek</button>
            </div>
            <div>
              <p className="mt-3 lead">Creëer dynamisch form</p>
              <div class="clearfix" divStyle>
                <div class="modal" id="preview-dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div id="form-generator"></div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                          id="button-close"
                        >
                          Close
                        </button>
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
        ) : (
              <div>
                <button
                  class="btn btn-primary"
                  type="button"
                  onClick={this.showGraph}
                >
                  Terug
            </button>

                <ResearchChart />
              </div>
            )}
      </section>
    );
  }
}

export default Onderzoekers;
