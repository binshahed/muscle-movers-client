/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button, Card, Row, Col } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <Row gutter={20}>
        <Col span={24} md={12}>
          <Card style={{ padding: "20px", height: "100%" }}>
            <h3 style={{ fontSize: "16px", color: "var(--primary)" }}>
              Get in Touch
            </h3>
            <h3 style={{ fontSize: "35px", fontWeight: "bold" }}>
              We'd love to hear from you
            </h3>
            <p style={{ padding: "40px 0" }}>
              If you have any questions, feedback, or just want to say hello,
              please feel free to reach out to us. Our team is always here to
              help and we look forward to hearing from you.
            </p>
            <p>
              <PhoneOutlined /> <strong>Phone:</strong> (123) 456-7890
              <br />
              <MailOutlined /> <strong>Email:</strong> support@musclemovers.com
            </p>
          </Card>
        </Col>
        <Col span={24} md={12}>
          <Card style={{ padding: "20px", height: "100%" }}>
            <Form
              form={form}
              name="contact_us"
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" }
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message" }
                ]}
              >
                <Input.TextArea placeholder="Your Message" rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
