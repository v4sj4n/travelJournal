import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from "./data";

function App() {
  let hero = data.map((item) => {
    return <Hero key={item.id} item={item} />;
  });
  return (
    <div>
      <Header />
      {hero}
    </div>
  );
}

export default App;
