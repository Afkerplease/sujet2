import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/api/meubles")
      .then((res) => res.json())
      .then((data) => setData(data.data.meubles));
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((meuble) => (
        <div>
          <h1> {meuble.name} </h1>
          <h2> {meuble.category} </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
