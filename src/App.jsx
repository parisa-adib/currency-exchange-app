import { useState } from "react";
import "./App.css";
import Landing from "./component/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landing />
    </>
  );
}

export default App;