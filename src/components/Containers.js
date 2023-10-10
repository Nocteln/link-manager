import AddForm from "./AddForm";
import Categorie from "../App";

export function LeftContainer({ onAddItem, items, onAddCat }) {
  return (
    <div className="leftContainer">
      <AddForm onAddItem={onAddItem} items={items} onAddCat={onAddCat} />
    </div>
  );
}

export function RightContainer({ items, onDeleteItem }) {
  return (
    <div className="rightContainer">
      {items.map((cat) => {
        if (!cat) return <p>ccs</p>;
        return (
          <Categorie cat={cat} key={cat.name} onDeleteItem={onDeleteItem} />
        );
      })}
    </div>
  );
}
