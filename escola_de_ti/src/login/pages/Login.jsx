import AuthLayout from "../layout/AuthLayout"; // Correto: sobe um nível e entra em layout
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";       // Ajustado: 'I' maiúsculo e caminho correto
import PasswordInput from "../components/PasswordInput";
import SocialLogin from "../components/SocialLogin";
import "./telas-login-usuario.css";        // Verifique se o CSS está na raiz de /login ou /src

export default function Login() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <h2>Bem Vindo</h2>
      <Input label="Email" type="email" placeholder="Digite seu email" />
      <PasswordInput label="Senha" placeholder="Digite sua senha" />
      
      <a href="#" className="esqueceu-senha">Esqueceu sua senha? Recuperar senha</a>
      <button className="btn-primary">Entrar</button>
      
      <SocialLogin />
      
      <button 
        type="button"
        className="btn-secondary" 
        onClick={() => navigate("/cadastro")}      >
        Registre-se
      </button>
 
    </AuthLayout>
  );
}