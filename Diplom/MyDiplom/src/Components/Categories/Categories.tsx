import { FC } from "react";
import { Categories } from "../../shared/baseApi";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

interface ICategories {
  title: string;
  categories: Categories[];
  amount: number;
}

const Categoriess: FC<ICategories> = ({ title, categories, amount }) => {
  const list = categories.filter((_, i) => i < amount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list?.map((category: Categories) => (
          <Link
            to={`categories/${category.id}`}
            key={category.id}
            className={styles.item}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${category.image})` }}
            />
            <h3 className={styles.title}>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categoriess;
