import AuthLayout from "../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import "./telas-login-usuario.css";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <h2>Cadastre-se</h2>
      <Input label="Nome" name="nome" placeholder="Digite seu nome" />
      <Input label="Email" name="email" type="email" placeholder="Digite seu email" />
      <PasswordInput label="Senha" name="senha" placeholder="Digite sua senha" />
      <PasswordInput label="Confirmar Senha" name="confirmarSenha" placeholder="Confirme sua senha" />
      
      <button type="button" className="btn-primary">Finalizar Cadastro</button>
      <p style={{ textAlign: 'center', fontSize: '13px', marginBottom: '-13px'}}>Já possui uma conta?</p>
    <button 
    type="button" 
    className="btn-secondary" 
    onClick={() => navigate("/login")}
>
  Voltar a tela de login
</button>
  
    </AuthLayout>
  );
}