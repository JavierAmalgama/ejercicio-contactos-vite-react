import React from "react";
import Input from "./form/Input";
import { Input as PasswordInput } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import ButtonSubmit from "./buttons/ButtonSubmit";

const LoginForm = () => {
  return (
    <form action="/login">
      <Input value="fullname" name="Full name" type="text" placeholder="Full name" />
      <div className="form-field">
        <label>Password</label>
        <PasswordInput.Password
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>
      <ButtonSubmit innerText="Log In" />
    </form>
  );
};

export default LoginForm;
