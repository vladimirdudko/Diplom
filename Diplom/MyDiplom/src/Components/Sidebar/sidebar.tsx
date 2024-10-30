import { NavLink } from "react-router-dom";
import { Categories, useGetCategoriesQuery } from "../../shared/baseApi";
import styles from "./style.module.scss";

const Sidebar = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>

      <nav>
        <ul className={styles.menu}>
          {categories?.slice(0, 6).map((category: Categories) => (
            <li key={category.id}>
              <NavLink to={`categories/${category.id}`}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a className={styles.link} target="_blank" href="/help">
          Help
        </a>
        <a
          className={styles.link}
          target="_blank"
          href="/terms"
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};
export default Sidebar;
