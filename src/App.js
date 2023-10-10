import { useState } from "react";
import "./App.css";
import { LeftContainer, RightContainer } from "./components/Containers";

let cat = [
  {
    name: "Google",
    sites: [
      { name: "Google Search", url: "https://www.google.com" },
      { name: "Gmail", url: "https://mail.google.com" },
      { name: "Google News", url: "https://news.google.com" },
    ],
  },
  // {
  //   name: "Facebook",
  //   sites: [
  //     { name: "Facebook Homepage", url: "https://www.facebook.com" },
  //     { name: "Facebook Messenger", url: "https://www.messenger.com" },
  //   ],
  // },
  // {
  //   name: "Twitter",
  //   sites: [
  //     { name: "Twitter Homepage", url: "https://twitter.com" },
  //     { name: "TweetDeck", url: "https://tweetdeck.twitter.com" },
  //   ],
  // },
];

export default function App() {
  // if (!localStorage.getItem("items")) {
  //   localStorage.setItem("items", JSON.stringify(cat));
  // }
  const [items, setItems] = useState(
    localStorage.getItem("item")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );
  console.log(items);
  function handleAddItems(item) {
    setItems((prevItems) => {
      return prevItems.map((category) => {
        if (category.name === item.name) {
          return {
            ...category,
            sites: [...category.sites, item.site],
          };
        }
        return category;
      });
    });
    localStorage.setItem("items", JSON.stringify(items));
  }

  function handleDeleteItem(item, cat) {
    setItems((prevItems) => {
      return prevItems
        .map((category) => {
          if (category.name === cat.name) {
            const newSites = category.sites.filter(
              (site) => site.url !== item.url
            );
            // Si la catégorie n'a plus de sites, ne la retournez pas
            if (newSites.length === 0) {
              localStorage.setItem("items", "null");
              return null;
            }
            return { ...category, sites: newSites };
          }
          return category;
        })
        .filter(Boolean); // Supprimez les catégories nulles
    });
    localStorage.setItem("items", JSON.stringify(items));
  }

  function handleAddCat(cat) {
    setItems((prev) => [...prev, cat]);
    localStorage.setItem("items", JSON.stringify(items));
  }

  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <LeftContainer
          onAddItem={handleAddItems}
          items={items}
          onAddCat={handleAddCat}
        />
        <RightContainer items={items} onDeleteItem={handleDeleteItem} />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="navbar">
      <h1>Link Manager</h1>
      <ShearchForm />
    </div>
  );
}
function ShearchForm() {
  return (
    <form className="shearch">
      <input type="text" placeholder="rechercher..." />
    </form>
  );
}

export function Item({ site, onDeleteItem, cat }) {
  return (
    <li className="item">
      {/* <div className="titre"> */}
      <h3 href={site.url}>{site.name} </h3>
      <span onClick={() => onDeleteItem(site, cat)}>❌</span>
      {/* </div> */}
    </li>
  );
}
