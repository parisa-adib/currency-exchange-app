import React from "react";

//gif
import spinner from "../gif/loader.gif";

const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="loading"/>
      <h3>Loading...</h3>
    </div>
  );
};

export default Loader;
