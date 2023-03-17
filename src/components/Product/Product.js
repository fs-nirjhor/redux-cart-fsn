import style from "./product.module.css";

const Product = (props) => {
	  const {product,addToCart} = props;
		const {name} = product;
return (
	<section className={style.product}>
		<h3>{name}</h3>
		<button onClick = { () => addToCart(product) }
				>Order Now</button>
	</section>
);
};

export default Product;