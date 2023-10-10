import { useState } from "react";

export default function AddForm({ onAddItem, items, onAddCat }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState(
    items.length > 0 ? items[0].name : "Ajouter"
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || url === "" || category === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    const item = { name: category, site: { url, name, timestamp } };

    for (let i = 0; i < items.length; i++) {
      for (let k = 0; k < items[i].sites.length; k++) {
        if (items[i].name === category && items[i].sites[k].url === url) {
          alert("Ce lien existe déjà");
          return;
        }
      }
    }

    if (category === "Ajouter") {
      const t = prompt("Nom de la catégorie :");
      if (t === null) return;
      const cat = { name: t, sites: [{ url, name }] };
      onAddCat(cat);
      console.log((items) => [...items, item]);
    } else {
      onAddItem((items) => [...items, item]);
    }

    setCategory(items.length > 0 ? items[0].name : "Autre");
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
      <label htmlFor="category">Sélectionner une catégorie :</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          console.log(e.target.value);
        }}
      >
        {items.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
        <option value="Ajouter">Ajouter</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
}
