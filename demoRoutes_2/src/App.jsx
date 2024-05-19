import "./App.css";
import { Outlet } from "react-router-dom";

import HeaderPage from "./header";
import FooterPage from "./footer";

function App() {
  return (
    <>
      <HeaderPage />
      <main>
        <Outlet />
      </main>
      <FooterPage />
    </>
  );
}

export default App;
