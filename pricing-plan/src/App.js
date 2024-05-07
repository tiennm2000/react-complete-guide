import "./App.css";
import MyBoxPrices from "./components/MyBoxPrices";

function App() {
  const data = [
    {
      title: "basic",
      price: 10,
      person: 1,
      storage: 10,
      domain: 1,
    },
    {
      title: "regular",
      price: 30,
      person: 10,
      storage: 50,
      domain: 10,
    },
    {
      title: "business",
      price: 90,
      person: 100,
      storage: 100,
      domain: 100,
    },
  ];

  return (
    <div className="container">
      <MyBoxPrices items={data} />
    </div>
  );
}

export default App;
