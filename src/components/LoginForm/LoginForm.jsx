// import Input from "./form/Input";
import { Input, Input as PasswordInput } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import ButtonSubmit from "../buttons/ButtonSubmit";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="form-field">
        <label>Full Name</label>
        <Input name="Full name" type="text" placeholder="Full name" />
      </div>
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
