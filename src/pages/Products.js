import { Link } from "react-router-dom";
import products from "../data";
const Products = () => {
  return (
    <section className="section ">
      <div className="products">
        {products.map((product) => {
          const { id, name } = product;
          return (
            <article key={id}>
              <h3>{name}</h3>
              <Link to={`/products/${id}`} className="btn">
                More Product
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
