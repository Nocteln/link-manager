import { Item } from "../App";

export default function Categorie({ cat, onDeleteItem }) {
  return (
    <div className="categorie">
      <h2>{cat.name}</h2>
      <ul>
        {cat.sites.map((site) => {
          return (
            <Item
              site={site}
              key={site.url}
              onDeleteItem={onDeleteItem}
              cat={cat}
            />
          );
        })}
      </ul>
    </div>
  );
}
