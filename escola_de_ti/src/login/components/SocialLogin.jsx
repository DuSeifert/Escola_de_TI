import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <>
      <div className="social-divider">Ou conecte-se com</div>
      <div className="social-icons">
        <button type="button"><FcGoogle /></button>
        <button type="button" style={{ color: '#1877F2' }}><FaFacebook /></button>
        <button type="button"><FaApple /></button>
      </div>
    </>
  );
}