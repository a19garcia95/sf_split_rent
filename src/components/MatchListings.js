import React from "react";
import "./MatchListings.css";
import { Card } from "antd";
import { PageHeader } from "antd";
import { Button } from "antd";

const { Meta } = Card;

class MatchListings extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          onBack={() => null}
          title="Header"
          subTitle="Put some header here"
        />
        ,
        <container class="xparent">
          <Card
            className="xchild1"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Name:" description="Age:" />
            <Meta description="Ethnicity:" />
            <Button type="primary">Contact</Button>
          </Card>
          <Card
            className="xchild2"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </container>
      </div>
    );
  }
}

export default MatchListings;
