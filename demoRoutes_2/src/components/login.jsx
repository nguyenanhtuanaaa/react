import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Current User login!!!");
        console.log(user);
      } else {
        console.log("User Logout !!!");
      }
    });
  }, []);
  function handleLogin() {
    signInWithEmailAndPassword(auth, "anhtuan@gmail.com", "123456")
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log("User Logout !!!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <button onClick={handleLogin} className="btn">
        Login
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
