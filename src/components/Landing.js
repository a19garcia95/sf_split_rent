import { Layout, Menu, Breadcrumb } from "antd";
import "./Landing.css";
import React, { Component } from "react";

import WrappedRegistrationForm from "./Register";

import LandingInfo from "./LandingInfo";
import Footerrr from "./Footerrr";

const { Header, Content, Footer } = Layout;

class Landing extends Component {
  render() {
    // ES6 Destructuring the props and state

    return (
      <div>
        <Layout className="layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">SF Split Rent</Menu.Item>
              <Menu.Item key="2">Register</Menu.Item>
              <Menu.Item key="3">Sign In</Menu.Item>
              <Menu.Item key="3">Logout if you're signed in</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 30px" }}>
            <Breadcrumb style={{ margin: "36px 0" }} />
            <div style={{ background: "#fff", padding: 44, minHeight: 680 }}>
              <LandingInfo />
              <WrappedRegistrationForm />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <Footerrr />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Landing;
