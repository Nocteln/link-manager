import { useState, useEffect } from "react";

export default function TriForm({ items, onSort }) {
  const [sortBy, setSortBy] = useState("a-z");

  useEffect(() => {
    onSort(sortBy);
  }, [sortBy]);
  return (
    <div className="tri">
      <h3>Classer par :</h3>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="date">date d'ajout</option>
      </select>
    </div>
  );
}
