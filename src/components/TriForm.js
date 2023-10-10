import { useState, useEffect } from "react";

export default function TriForm({ items, onSort, onSortList }) {
  const [sortByCat, setSortByCat] = useState("a-z");
  const [sortByList, setSortByList] = useState("a-z");

  useEffect(() => {
    onSort(sortByCat);
  }, [sortByCat]);
  useEffect(() => {
    onSortList(sortByList);
  }, [sortByList]);
  return (
    <div className="tri">
      <h3>Classer par :</h3>
      <select value={sortByCat} onChange={(e) => setSortByCat(e.target.value)}>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="date">date d'ajout</option>
      </select>
      <h3>Classer par :</h3>
      <select
        value={sortByList}
        onChange={(e) => setSortByList(e.target.value)}
      >
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="date">date d'ajout</option>
      </select>
    </div>
  );
}
