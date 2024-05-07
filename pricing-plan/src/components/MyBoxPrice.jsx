import "./MyBoxPrice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyBoxPrice({ title, person, price, storage, domain }) {
  return (
    <div className="box">
      <h3>{title}</h3>
      <div className="price">
        <span>$</span>
        {price}.<span>00</span>
      </div>
      <div className="list">
        <p>
          <i class="fa-solid fa-check"></i>
          {person} person
        </p>
        <p>
          <i class="fa-solid fa-check"></i>1 storage
        </p>
        <p>
          <i class="fa-solid fa-check"></i>1 domain
        </p>
        <p>
          <i class="fa-solid fa-check"></i>team support
        </p>
        <p>
          <i class="fa-solid fa-check"></i>maintenance
        </p>
      </div>
      <a href="#" className="btn">
        choose plan
      </a>
    </div>
  );
}

export default MyBoxPrice;
