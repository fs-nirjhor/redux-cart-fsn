import { removeFromCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <section style={{textAlign:"center", margin: "5px",lineHeight: 2}}>
      {cart.map((product) => (
        <li key={product.serial}>
          {product.name}  <button onClick={() => removeFromCart(product)}>X</button>
        </li>
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
const mapDispatchToProps = { removeFromCart: removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
