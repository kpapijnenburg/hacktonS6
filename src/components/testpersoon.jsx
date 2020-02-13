import React, { Component } from "react";
import Switch from "react-switch";
import DataAdapter from "../util/DataAdapter";

class TestPersoon extends Component {
  constructor(props) {
    const adapter = new DataAdapter();

    const tweets = adapter.getByUserId(1960);

    const user = {
      id: tweets[0].user_id,
      name: tweets[0].name
    };

    super(props);
    this.state = {
      content: "",
      user: user
    };
  }

  componentDidMount = () => {
    this.displayProfile();
  };

  handleChange() {}

  displayProfile = () => {
    const { user } = this.state;

    const content = (
      <section>
        <h2 className="lead">Profiel</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th className="col"></th>
              <th className="col-1">Tonen</th>
              <th className="col-1">Verwijderen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Naam</th>
              <td>{user.name}</td>
              <td>
                <Switch onChange={this.handleChange} />
              </td>
              <td className="text-center text-danger pointer">
                <strong>X</strong>
              </td>
            </tr>
            <tr>
              <th>Telefoonnummer</th>
              <td>+31637474440</td>
              <td>
                <Switch onChange={this.handleChange} />
              </td>
              <td className="text-center text-danger pointer">
                <strong> X </strong>
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>jasperdekroon2000@gmail.com</td>
              <td>
                <Switch onChange={this.handleChange} />
              </td>
              <th className="text-center text-danger pointer">X</th>
            </tr>
          </tbody>
        </table>
      </section>
    );
    this.setState({ content });
  };

  displayServices = () => {
    const { user } = this.state;

    const content = (
      <section>
        <h2 className="lead">Services</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th className="col"></th>
              <th className="col-1">Tonen</th>
              <th className="col-1">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Facebook</th>
              <th>{user.name}</th>
              <th>
                <Switch onChange={this.handleChange} />
              </th>
              <th className="d-flex justify-content-center">
                <button className="btn btn-danger">Disconnect</button>
              </th>
            </tr>
            <tr>
              <th>Twitter</th>
              <th>{user.name}</th>
              <th>
                <Switch onChange={this.handleChange} />
              </th>
              <th className="d-flex justify-content-center">
                <button className="btn btn-primary">Connect</button>
              </th>
            </tr>
          </tbody>
        </table>
      </section>
    );
    this.setState({ content });
  };

  displayData = () => {
    const content = (
      <section>
        <h2 className="lead">Tweets</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>sentiment</th>
              <th>subject_matter</th>
              <th>retweet_count</th>
              <th>tweet_created</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Neutral</th>
              <th>None of the above</th>
              <th>5</th>
              <th>07-08-15 9:54</th>
            </tr>
            <tr>
              <th>Positive</th>
              <th>None of the above</th>
              <th>26</th>
              <th>07-08-15 9:54</th>
            </tr>
            <tr>
              <th>Neutral</th>
              <th>None of the above</th>
              <th>27</th>
              <th>07-08-15 9:54</th>
            </tr>
          </tbody>
        </table>
        <h2 className="lead">Facebook posts</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>sentiment</th>
              <th>subject_matter</th>
              <th>repost_count</th>
              <th>likes</th>
              <th>post_created</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Neutral</th>
              <th>None of the above</th>
              <th>5</th>
              <th>109</th>
              <th>07-08-15 9:54</th>
            </tr>
            <tr>
              <th>Positive</th>
              <th>None of the above</th>
              <th>26</th>
              <th>872</th>
              <th>07-08-15 9:54</th>
            </tr>
            <tr>
              <th>Neutral</th>
              <th>None of the above</th>
              <th>27</th>
              <th>180</th>
              <th>07-08-15 9:54</th>
            </tr>
          </tbody>
        </table>
      </section>
    );

    this.setState({ content });
  };

  render() {
    const { content, user } = this.state;
    return (
      <section className="col">
        <p className="lead">{user.name}</p>
        <div className="border row">
          <div className="col">{content}</div>

          <div className="border-left col-2 d-flex flex-column p-0">
            <button
              className="btn btn-light m-1 border"
              onClick={this.displayProfile}
            >
              Profiel
            </button>
            <button
              className="btn btn-light m-1 border"
              onClick={this.displayServices}
            >
              Services
            </button>
            <button
              className="btn btn-light m-1 border"
              onClick={this.displayData}
            >
              Data
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default TestPersoon;
