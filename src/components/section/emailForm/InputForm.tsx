"use client";
import React from "react";
import { Form, Input } from "antd";

const InputForm = () => {
  const handleSubmit = () => {};
  const alertMsg ='This field can not be empty!'
  const requireRule = {required: true,message:alertMsg}
  return (
    <Form onFinish={() => handleSubmit()}>
      <div className="grid m-auto my-[30px] grid-cols-2 w-[780px] gap-[25px]">
        <Form.Item name="name" rules={[requireRule]}>
          <Input maxLength={100} size="large" placeholder="Your Name" />
        </Form.Item>
        <Form.Item name="email" rules={[requireRule] }>
          <Input maxLength={100} size="large" placeholder="Email" />
        </Form.Item>

        <Form.Item name="contact" rules={[requireRule]}>
          <Input
            maxLength={100}
            size="large"
            placeholder="Reason for Contacting"
          />
        </Form.Item>
        <Form.Item name="phone" rules={[requireRule]}>
          <Input maxLength={100} size="large" placeholder="Phone" />
        </Form.Item>
        <Form.Item
          className="col-span-2"
          name="message"
          rules={[requireRule]}
        >
          <Input.TextArea maxLength={100} size="large" placeholder="Message" />
        </Form.Item>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="button-global-style mt-[15px] w-[250px] bg-white text-black blue-btn "
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default InputForm;
