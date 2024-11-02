import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../features/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";
import Button from "../Button";
import {
  addItemToCart,
  CartItem,
  removeCartItem,
} from "../../features/Slice/user/User";

const Cart = () => {
  const { cart } = useSelector((state: RootStateType) => state.user);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const changeQuantity = (item: CartItem, quantity: number) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };
  const removeItem = (id: number | undefined) => {
    if (id !== undefined) {
      dispatch(removeCartItem(id));
    } else {
      console.error("ID is undefined");
    }
  };

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your Cart</h2>
      {!cart.length ? (
        <div className={styles.empty}>You need LOG IN</div>
      ) : (
        <>
          <div className={styles.list}>
            {cart?.map((item) => (
              <div className={styles.item} key={item.id}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={styles.info}>
                  <h3 className={styles.titleInfo}>{item.title}</h3>
                </div>
                <div className={styles.price}>{item.price}$</div>
                <div className={styles.quantity}>
                  <div
                    className={styles.minus}
                    onClick={() => {
                      changeQuantity(item, Math.max(1, item.quantity - 1));
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <span>{item.quantity}</span>
                  <div
                    className={styles.plus}
                    onClick={() => {
                      changeQuantity(item, Math.max(1, item.quantity + 1));
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <div className={styles.total}>
                  {item.price * item.quantity}$
                </div>
                <div
                  className={styles.delete}
                  onClick={() => removeItem(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.action}>
            <div className={styles.total}>
              TOTAL PRICE: <span>{totalPrice}$</span>
            </div>
            <Button className={styles.proceed}>Proceed to checkout</Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
