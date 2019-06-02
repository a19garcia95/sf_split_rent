import React, { Component } from "react";
import { Avatar } from "antd";

class Avatarr extends Component {
  render() {
    // ES6 Destructuring the props and state

    return (
      <div>
        <Avatar shape="square" size={64} icon="user" />
      </div>
    );
  }
}

export default Avatarr;
