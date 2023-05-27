import { useState } from "react";
import "./App.css";

//component
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
