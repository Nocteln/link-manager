import { useState } from "react";

export default function AddForm({ onAddItem, items }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState(
    items[0].name ? items[0].name : "Autre"
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || url === "" || category === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const item = { name: category, site: { url, name } };

    onAddItem(item);

    setCategory("");
    setName("");
    setUrl("");
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <h3>Ajouter un lien</h3>
      <label htmlFor="lien">Lien :</label>
      <input
        type="url"
        placeholder="https://..."
        id="lien"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <label htmlFor="nom">Nom du lien :</label>
      <input
        id="nom"
        type="text"
        placeholder="nom..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="category">Séléctionner une categorie :</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {items.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
        <option value="autre">Autre</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
}
