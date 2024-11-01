import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import styles from "./style.module.scss";
import Button from "../../Button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../features/Slice/user/User";

interface IProduct {
  images: string[];
  title: string;
  price: number;
  description: string;
  id: number;
}
const SIZES = [1, 2, 3, 4];
const Product: FC<IProduct> = ({ images, title, price, id, description }) => {
  const [curImage, setCurImage] = useState<string | undefined>(undefined);
  const [curSize, setCurSize] = useState<number | undefined>(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!images.length) return;
    setCurImage(images[0]);
  }, [images]);
  const addToCart = () => {
    if (!curSize || !curImage) return;

    dispatch(
      addItemToCart({
        id: id,
        title,
        price,
        size: curSize,
        image: curImage,
        quantity: 1,
      })
    );
  };

  return (
    <section className={styles.product}>
      <div className={styles.image}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${curImage})` }}
        />
        {images?.map((image: string, i: number) => (
          <div
            key={i}
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setCurImage(image)}
          />
        ))}
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div
                key={size}
                onClick={() => {
                  setCurSize(size);
                }}
                className={`${styles.size} ${
                  curSize === size ? styles.activsize : ""
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.descr}>{description}</p>
        <div className={styles.action}>
          <Button
            onClick={addToCart}
            disabled={!curSize}
            className={styles.add}
          >
            Add to card
          </Button>
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
