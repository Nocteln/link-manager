import AddForm from "./AddForm";
import Categorie from "./Categorie";
import TriForm from "./TriForm";

export function LeftContainer({
  onAddItem,
  items,
  onAddCat,
  onSort,
  onSortList,
}) {
  return (
    <div className="leftContainer">
      <AddForm onAddItem={onAddItem} items={items} onAddCat={onAddCat} />
      <TriForm items={items} onSort={onSort} onSortList={onSortList} />
    </div>
  );
}

export function RightContainer({ items, onDeleteItem }) {
  return (
    <div className="rightContainer">
      {items.length === 0 ? (
        <h1 className="aucuneCat">Aucune catégorie / liens </h1>
      ) : (
        items.map((cat) => {
          if (!cat) return <p>ccs</p>;
          return (
            <Categorie cat={cat} key={cat.name} onDeleteItem={onDeleteItem} />
          );
        })
      )}
    </div>
  );
}
