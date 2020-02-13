import React, { Component } from "react";
import { Link } from "react-router-dom";

class Onderzoekers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section class="col">
        <button class="btn btn-primary" type="button">
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
      </section>
    );
  }
}

export default Onderzoekers;
