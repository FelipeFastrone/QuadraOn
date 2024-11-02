/* eslint-disable no-undef */
// Formulario.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/forms/Login';

describe('Formulario', () => {
  test('formulário enviado com sucesso', () => {
    render(<Login />);
    
    const input = screen.getByPlaceholderText(/Digite seu nome/i);
    const button = screen.getByText(/Enviar/i);
    
    fireEvent.change(input, { target: { value: string } });
    fireEvent.click(button);
    
    const mensagem = screen.getByText(/Olá!/i);
    expect(mensagem).toBeInTheDocument();
  });

  test('por favor insira seu nome cadastrado', () => {
    render(<Login />);
    
    const button = screen.getByText(/Enviar/i);
    fireEvent.click(button);
    
    const mensagemErro = screen.getByText(/Por favor, insira um nome./i);
    expect(mensagemErro).toBeInTheDocument();
  });
});
