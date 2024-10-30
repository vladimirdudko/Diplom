import { FC } from "react";
import styles from "./style.module.scss";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import Button from "../../Button";
interface IProduct {
  images: string[];
  title: string;
  price: number;
  description: string;
}
const SIZES = [1, 2, 3, 4];
const Product: FC<IProduct> = ({ images, title, price, description }) => {
  const currentImage = images;
  return (
    <section className={styles.product}>
      <div className={styles.image}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        {images?.map((image: string, i: number) => (
          <div
            key={i}
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => {}}
          />
        ))}
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div key={size} onClick={() => {}} className={`${styles.size}`}>
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.descr}>{description}</p>
        <div className={styles.action}>
          <Button className={styles.add}>Add to card</Button>
          <Button className={styles.favorite}>Add to favourites</Button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchase}>25 people purchased</div>
        </div>
        <Link to={ROUTES.HOME}>Return to store</Link>
      </div>
    </section>
  );
};

export default Product;
