import {useState} from 'react'

import { SignupForm, InputField, SubmitButton, Title } from './Signup.styles';

// eslint-disable-next-line react/prop-types
const Signup = ({handleSignup}) => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup({ email, password });
  };
  return (
    <div>
         <Title>Cadastro</Title>
      <SignupForm onSubmit={handleSubmit}>
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
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </SignupForm>
    </div>
  )
}

export default Signup