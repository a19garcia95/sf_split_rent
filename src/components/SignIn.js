import React, { Component } from "react";
import "./SignIn.css";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  InputNumber,
  Select,
  Row,
  Col,
  Switch,
  Checkbox,
  Button,
  AutoComplete,
  TimePicker
} from "antd";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

class SignIn extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };

    return (
      <div className="cc">
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Roommates">
            {getFieldDecorator("input-number", { initialValue: 3 })(
              <InputNumber min={1} max={10} />
            )}
          </Form.Item>
          <Form.Item label="Bedrooms">
            {getFieldDecorator("input-number2", { initialValue: 3 })(
              <InputNumber min={1} max={10} />
            )}
          </Form.Item>
          <Form.Item label="Bathrooms">
            {getFieldDecorator("input-number3", { initialValue: 3 })(
              <InputNumber min={1} max={10} />
            )}
          </Form.Item>

          <Form.Item label="Price ($)">
            {getFieldDecorator("input-number5", { initialValue: 3 })(
              <InputNumber min={1} max={100000} />
            )}
          </Form.Item>

          <Form.Item label="Pets Allowed">
            {getFieldDecorator("switch", { valuePropName: "checked" })(
              <Switch />
            )}
          </Form.Item>
          <Form.Item label="Overnight guests">
            {getFieldDecorator("switch", { valuePropName: "checked" })(
              <Switch />
            )}
          </Form.Item>
          <Form.Item label="Bedtime">
            {getFieldDecorator("time-picker", config)(<TimePicker />)}
          </Form.Item>

          <Form.Item label="Neighborhood">
            {getFieldDecorator("checkbox-group", {
              initialValue: []
            })(
              <Checkbox.Group style={{ width: "100%" }}>
                <Row>
                  <Col span={8}>
                    <Checkbox value="A">Rincon Hill</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="B">Mission District</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="C">Financial District</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="D">Soma</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="E">Presidio</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="E">Hayes Valley</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            )}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const SignIn2 = Form.create({ name: "register" })(SignIn);
export default SignIn2;
