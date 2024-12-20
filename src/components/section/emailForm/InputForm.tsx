"use client";
import React, { useState } from "react";
import { Form, Input, notification, Button } from "antd";
import emailjs from "@emailjs/browser";

interface FormData {
  [key: string]: string;
}
const InputForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const handleSubmit = async (data: FormData) => {
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
      ? process.env.NEXT_PUBLIC_SERVICE_ID
      : "";
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
      ? process.env.NEXT_PUBLIC_TEMPLATE_ID
      : "";
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
      ? process.env.NEXT_PUBLIC_PUBLIC_KEY
      : "";
    setLoading(true);
    await emailjs
      .send(serviceID, templateID, data, {
        publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          notification.success({
            message: "Email has been sent. We will contact you soon.",
          });
          form.resetFields();
        },
        (error) => {
          console.log("FAILED...", error);
          notification.error({
            message:
              "Something went wrong! Please contact us via the email or social media link provided above",
          });
        }
      );
    setLoading(false);
  };
  const alertMsg = "This field can not be empty!";
  const requireRule = { required: true, message: alertMsg };
  const formItemGridCol =
    "lg:col-span-6  md:col-span-6 col-span-12 ";
  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      className="ant-form"
    >
      <div className="grid m-auto my-[30px] grid-cols-12  lg:w-[70%] w-[100%] gap-[25px]">
        <Form.Item
          className={formItemGridCol}
          name="name"
          rules={[requireRule]}
        >
          <Input
            disabled={loading}
            maxLength={100}
            size="large"
            placeholder="Your Name"
          />
        </Form.Item>
        <Form.Item
          className={formItemGridCol}
          name="email"
          rules={[
            requireRule,
            { type: "email", message: "Please enter a valid email address!" }, // Validates email format
          ]}
        >
          <Input
            disabled={loading}
            maxLength={100}
            size="large"
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          className={formItemGridCol}
          name="reason"
          rules={[requireRule]}
        >
          <Input
            disabled={loading}
            maxLength={100}
            size="large"
            placeholder="Reason for Contacting"
          />
        </Form.Item>
        <Form.Item
          className={formItemGridCol}
          name="phone"
          rules={[requireRule]}
        >
          <Input
            disabled={loading}
            maxLength={100}
            size="large"
            placeholder="Phone"
          />
        </Form.Item>
        <Form.Item className="col-span-12" name="message" rules={[requireRule]}>
          <Input.TextArea
            disabled={loading}
            style={{ height: "150px", width: "100%" }}
            maxLength={100}
            size="large"
            placeholder="Message"
          />
        </Form.Item>
      </div>
      <div className="flex justify-center">
        <Button
          htmlType="submit"
          loading={loading}
          disabled={loading}
          className="button-global-style mt-[15px] w-[250px] h-[50px] bg-white text-black blue-btn "
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default InputForm;
