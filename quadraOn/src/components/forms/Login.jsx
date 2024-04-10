import {useState} from "react";
import { LoginForm, InputField, SubmitButton, Title } from "./Login.styles";

// eslint-disable-next-line react/prop-types
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };
  return (
    <div>
      <Title>Login</Title>
      <LoginForm onSubmit={handleSubmit}>
        <InputField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </div>
  );
};

export default Login;
