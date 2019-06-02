import React, { Component } from "react";
import "./LandingInfo.css";
import { Card } from "antd";

class LandingInfo extends Component {
  render() {
    // ES6 Destructuring the props and state

    return (
      <div className="zz">
        <Card title="Welcome to SF Split Rent, we are glad you cannot afford rent in SF. We're here to help">
          <p
            style={{
              fontSize: 14,
              color: "rgba(0, 0, 0, 0.85)",
              marginBottom: 16,
              fontWeight: 500
            }}
          >
            Why Us?
          </p>
          <Card type="inner" title="How it works?" extra={<a href="#">More</a>}>
            Inner Card content
          </Card>
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Value Proposition"
            extra={<a href="#">More</a>}
          >
            Inner Card content
          </Card>
        </Card>
      </div>
    );
  }
}

export default LandingInfo;
