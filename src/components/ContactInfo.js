import React from "react";
import { Card } from "antd";

class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        <p>
          This will require an ID of each individual in order to render their
          particular form
        </p>
        <Card title="Card title">
          <p
            style={{
              fontSize: 14,
              color: "rgba(0, 0, 0, 0.85)",
              marginBottom: 16,
              fontWeight: 500
            }}
          >
            THIS IS MY CONTACT INFO IN DETAIL
          </p>
          <Card
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
          >
            Inner Card content
          </Card>
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
          >
            Inner Card content
          </Card>
        </Card>
        ,
      </div>
    );
  }
}
export default ContactInfo;
