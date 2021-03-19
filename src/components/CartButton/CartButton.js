import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonContainer } from "./styled";
import { goToCartScreen } from "../../routes/coordinator";

const CartButton = () => {
  const history = useHistory();
  return (
    <ButtonContainer onClick={() => goToCartScreen(history)}>
      <span role="img" aria-label="carrinho">
        🛒
      </span>
    </ButtonContainer>
  );
};

export default CartButton;
