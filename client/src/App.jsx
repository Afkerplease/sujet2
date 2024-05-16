import React, { useState, useEffect } from "react";
import Form from "./../components/Form";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/meubles")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data.meubles);
      });
  }, [data]);
  console.log(data);
  return (
    <>
      <div>
        {data.map((meuble) => (
          <div key={meuble._id} className="data-item">
            {console.log(meuble)}
            <h3>{meuble.name}</h3>
            <p>Category: {meuble.category}</p>
            <p>Description: {meuble.description}</p>
            <p>Matériaux: {meuble.materiaux}</p>
            <p>Fournisseur: {meuble.fournisseur}</p>
          </div>
        ))}
      </div>
      <Form />
    </>
  );
}

export default App;
