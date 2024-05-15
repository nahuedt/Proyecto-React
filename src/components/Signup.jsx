import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup({ setUser }) {
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        setUser(userCredential.user.email);
        setError(null);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.error(errorCode);
        setError("Invalid email or password");
      });
  };
  return (
    <>
      <h2>Ingresar</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" placeholder="...@mail.com" name="email" />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            placeholder="keep your password secure"
            name="password"
          />
        </label>
        <p style={{ color: "tomato" }}>{error}</p>
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Signup;
