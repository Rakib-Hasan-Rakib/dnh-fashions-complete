import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../../../hooks/useCart';

const CartIcon = () => {
    const { cartItems } = useCart();
    return (
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">
          {cartItems.length}
        </span>
        <AiOutlineShoppingCart size={24} className="text-white" />
      </div>
    );
};

export default CartIcon;