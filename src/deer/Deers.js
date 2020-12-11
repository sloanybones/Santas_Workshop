import React from "react";
import Deer from "./Deer.js";
import { Header, } from "semantic-ui-react";
import Axios from "axios";
import DeerForm from "./DeerForm";

class Deers extends React.Component {
  state = {
    deers: [],
  };
  
  componentDidMount = () => {
    Axios.get("https://my-json-server.typicode.com/Joshua-Parco/demo/deers")
    .then((res) => {
      this.setState({deers: res.data})
    })
    .catch((err) => {
    })
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addDeer = (deerData) => {
    const { deers, } = this.state;
    const deer = { id: this.getId(), ...deerData, };
    this.setState({ deers: [deer, ...deers], });
  };

  editDeer = (deerData) => {
    const deers = this.state.deers.map( deer => {
      if (deer.id === deerData.id)
        return deerData;
      return deer
    });
    this.setState({ deers, });
  };

  renderDeers = () => {
    return this.state.deers.map( deer => <Deer key={deer.id} {...deer} edit={this.editDeer} />)
  };

  render() {
    return (
      <div>
        <Header as="h1">Deers</Header>
        <DeerForm add={this.addDeer} />
        { this.renderDeers() }
      </div>
    )
  }
}

export default Deers;
