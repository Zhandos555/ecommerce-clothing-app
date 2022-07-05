import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCarContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    return addItemToCart(product);
  };

  return (
    <ProductCarContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCarContainer>
  );
};

export default ProductCard;
