import "./App.css";

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
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <LeftContainer />
        <RightContainer />
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

function AddForm() {
  return (
    <form className="addForm">
      <h3>Ajouter un lien</h3>
      <label htmlFor="lien">Lien :</label>
      <input type="url" placeholder="https://..." id="lien" />
      <label htmlFor="nom">Nom du lien :</label>
      <input id="nom" type="text" placeholder="nom..." />
      <label htmlFor="category">Séléctionner une categorie :</label>
      <select id="category" name="category">
        {cat.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
        <option value="autre">Autre</option>
      </select>
    </form>
  );
}

function LeftContainer() {
  return (
    <div className="leftContainer">
      <AddForm />
    </div>
  );
}

function RightContainer() {
  return (
    <div className="rightContainer">
      {cat.map((cat) => {
        return <Categorie cat={cat} />;
      })}
    </div>
  );
}

function Categorie({ cat }) {
  return (
    <div className="categorie">
      <h2>{cat.name}</h2>
      <ul>
        {cat.sites.map((site) => {
          return <Item site={site} />;
        })}
      </ul>
    </div>
  );
}

function Item({ site }) {
  return (
    <li className="item">
      <div className="titre">
        <h3>{site.name}</h3>
        <span>❌</span>
      </div>
      <a href={site.url}>{site.url}</a>
    </li>
  );
}
