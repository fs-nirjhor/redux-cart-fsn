import Product from "../Product/Product";
import { addToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";

const Shop = (props) => {
  const { products, addToCart } = props;
  return (
    <section>
      {products.map((product) => (
        <Product product={product} addToCart={addToCart} key={product.id} />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = { addToCart: addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
