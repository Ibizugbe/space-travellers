import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Router } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Router></Router>
    </>
  );
}

export default App;
