import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordInput({ label, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-group">
      <label>{label}</label>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          {...props}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}