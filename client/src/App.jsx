import React, { useState, useEffect } from "react";
import Form from "./../components/Form";
import "./App.css";
import ModalForm from "../components/ModalForm";
import Datalist from "../components/Datalist";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/meubles")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.meubles);
      });
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      <div>
        {data.map((meuble) => (
          <Datalist meuble={meuble} />
        ))}
      </div>
      <Form />
    </>
  );
}

export default App;
