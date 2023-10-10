import { useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";

let cat = [
  {
    name: "Google",
    sites: [
      { name: "Google Search", url: "https://www.google.com" },
      { name: "Gmail", url: "https://mail.google.com" },
      { name: "Google News", url: "https://news.google.com" },
    ],
  },
  {
    name: "Facebook",
    sites: [
      { name: "Facebook Homepage", url: "https://www.facebook.com" },
      { name: "Facebook Messenger", url: "https://www.messenger.com" },
    ],
  },
  {
    name: "Twitter",
    sites: [
      { name: "Twitter Homepage", url: "https://twitter.com" },
      { name: "TweetDeck", url: "https://tweetdeck.twitter.com" },
    ],
  },
];

export default function App() {
  const [items, setItems] = useState(cat);
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
  }

  function handleDeleteItem(item, cat) {
    console.log(item);
    setItems((prevItems) => {
      for (let i = 0; i < prevItems.length; i++) {
        if (cat.name === prevItems[i].name) {
          console.log("Item ", prevItems[i]);
          prevItems[i].sites = prevItems[i].sites.filter(
            (site) => site.url !== item.url
          );
        }
      }
      return prevItems;
    });
  }

  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <LeftContainer onAddItem={handleAddItems} items={items} />
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

function LeftContainer({ onAddItem, items }) {
  return (
    <div className="leftContainer">
      <AddForm onAddItem={onAddItem} items={items} />
    </div>
  );
}

function RightContainer({ items, onDeleteItem }) {
  return (
    <div className="rightContainer">
      {items.map((cat) => {
        return (
          <Categorie cat={cat} key={cat.name} onDeleteItem={onDeleteItem} />
        );
      })}
    </div>
  );
}

function Categorie({ cat, onDeleteItem }) {
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

function Item({ site, onDeleteItem, cat }) {
  return (
    <li className="item">
      {/* <div className="titre"> */}
      <h3 href={site.url}>{site.name} </h3>
      <span onClick={() => onDeleteItem(site, cat)}>❌</span>
      {/* </div> */}
    </li>
  );
}
