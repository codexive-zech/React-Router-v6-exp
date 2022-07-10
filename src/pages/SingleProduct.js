import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, image } = product;

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Link to="/products" className="btn">
        Back to Product
      </Link>
    </section>
  );
};

export default SingleProduct;
