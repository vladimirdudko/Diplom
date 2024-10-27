import { FC } from "react";
import { Product } from "../../shared/baseApi";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

interface IProducts {
  products: Product[];
  title: string;
  amount: number;

  styles?: string[];
  style?: React.CSSProperties;
}
const Products: FC<IProducts> = ({ title, products, amount, style }) => {
  const list = products.filter((_, i) => i < amount);
  return (
    <section className={styles.productss} style={style}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list?.map((product: Product) => (
          <Link
            to={`products/${product.id}`}
            key={product.id}
            className={styles.product}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${product.images[0]})` }}
            ></div>

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{product.title}</h3>
              <div className={styles.categ}>{product.category.name}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{product.price}$</div>
                  <div className={styles.oldPrices}>
                    {Math.floor(product.price * 0.8)}$
                  </div>
                </div>
                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
