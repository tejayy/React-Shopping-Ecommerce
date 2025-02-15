import "./ReleatedProducts.css";
import data_product from "../../components/assets/data";
import Item from "../Item/Item";
const ReleatedProducts = () => {
  return (
    <div className="releatedproducts">
      <h1>Releated Products</h1>
      <hr />
      <div className="releatedproducts-icon">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReleatedProducts;
