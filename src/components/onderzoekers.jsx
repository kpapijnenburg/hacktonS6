import React, { Component } from "react";
import DataAdapter from "../util/DataAdapter";
import ResearchChart from "./onderzoek_chart";

class Onderzoekers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <>
        <ResearchChart />
      </>
    )
  }
}

export default Onderzoekers;
