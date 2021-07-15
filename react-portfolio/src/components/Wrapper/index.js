import React from "react";
// import "../../stylePortfolio.css";
import "./style.css";


function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;