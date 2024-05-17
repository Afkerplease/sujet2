import React from "react";

function Datalist({ meuble }) {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/meubles/${id} `, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div key={meuble._id} className="data-item">
      {console.log(meuble)}
      <h3>{meuble.name}</h3>
      <p>Category: {meuble.category}</p>
      <p>Description: {meuble.description}</p>
      <p>Matériaux: {meuble.materiaux}</p>
      <p>Fournisseur: {meuble.fournisseur}</p>
      <button onClick={() => handleDelete(meuble._id)}> delete </button>
      <button> update</button>
    </div>
  );
}

export default Datalist;
