import * as React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
    <Link to="/auth">Login</Link>
    <h3>test login</h3>
    <Link to="/display">Display</Link>
    <h3>test display</h3>
    </>
  )
}

export default Test;