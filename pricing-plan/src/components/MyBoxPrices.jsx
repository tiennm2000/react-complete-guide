import MyBoxPrice from "./MyBoxPrice";
import "./MyBoxPrices.css";

function MyBoxPrices(props) {
  return (
    <div className="box-container">
      {props.items.map((item) => (
        <MyBoxPrice {...item} />
      ))}
    </div>
  );
}

export default MyBoxPrices;
