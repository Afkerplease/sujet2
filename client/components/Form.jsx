import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    materiaux: "",
    fournisseur: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/meubles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Armoire">Armoire</option>
            <option value="Étagère">Étagère</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="materiaux">Matériaux:</label>
          <input
            type="text"
            id="materiaux"
            name="materiaux"
            value={formData.materiaux}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fournisseur">Fournisseur:</label>
          <select
            id="fournisseur"
            name="fournisseur"
            value={formData.fournisseur}
            onChange={handleChange}
            required
          >
            <option value="">Select Fournisseur</option>
            <option value="Bois">Bois</option>
            <option value="Fer:acier inox et aluminium">
              Fer:acier inox et aluminium
            </option>
            <option value="Métal et Plastique">Métal et Plastique</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
