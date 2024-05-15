import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Register from "../components/Register";
import Signup from "../components/Signup";
import Signout from "../components/Signout";
import Navbar from "../components/Navbar";

function AppRegister() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  return (
    <>
      <header>
    <Navbar/>
        <h1>Formulario de acceso</h1>
        {user ? (
          <p style={{ fontSize: "24px" }}>{user}</p>
        ) : (
          <p style={{ fontSize: "24px" }}>Sin usuario...</p>
        )}
      </header>
      {!user ? (
        <>
          <Register />
          <br />
          <hr />
          <Signup setUser={setUser} />
        </>
      ) : (
        <>
          <h3>Bienvenido/a</h3>
          <Signout setUser={setUser} />
        </>
      )}
    </>
  );
}

export default AppRegister;
