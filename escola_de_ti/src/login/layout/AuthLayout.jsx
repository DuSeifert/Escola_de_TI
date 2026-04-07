export default function AuthLayout({ children }) {
  return (
    <div className="container">
      <div className="left">
        <div className="login-box">
          {children}
        </div>
      </div>
      <div className="right">
        <div>
          <p>Texto para o lado direito</p>
          <p>texto 2</p>
        </div>
        <div>inserir texto</div>
      </div>
    </div>
  );
}