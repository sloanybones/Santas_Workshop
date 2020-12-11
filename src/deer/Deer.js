import React from "react";
import { Button, Header, Segment, } from "semantic-ui-react";
import DeerForm from "./DeerForm";

class Deer extends React.Component {
  state = { editing: false, };

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  render() {
    return (
      <Segment style={{ display: "flex", alignItems: "center", justifyContent: "space=between" }}>
        {
          this.state.editing ?
            <DeerForm { ...this.props } toggleEdit={this.toggleEdit} />
          :
          <>
            <div>
              <Header as="h3">{this.props.name}</Header>
              <p>{this.props.description}</p>
            </div>
            <div>
              <Button color="green" onClick={this.toggleEdit} >
                Update Info
              </Button>
              <Button color="red">
                Dismiss Deer
              </Button>
            </div>
          </>
        }
      </Segment>
    )
  }
};

export default Deer;
