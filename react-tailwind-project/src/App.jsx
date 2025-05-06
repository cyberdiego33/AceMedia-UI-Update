import { useState } from "react";
import "./App.css";

function NavBar() {

  return <header className="sticky top-0 bg-white">
    <div>
      <img src="/assets/main-logo.png" alt="main logo" />
    </div>
    <div></div>
  </header>;
}

function BodyChat() {
  return (
    <p>
    </p>
  );
}

export default NavBar;
export { BodyChat };
