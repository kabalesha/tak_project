import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hat from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hat />
    </>
  );
}

export default App;
