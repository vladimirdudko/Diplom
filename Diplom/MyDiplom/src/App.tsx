import { useLocation } from "react-router-dom";
import "./App.css";
import Categoriess from "./Components/Categories/Categories";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Products from "./Components/Products/Products";
import AppRoutes from "./Components/routes/routes";
import Sidebar from "./Components/Sidebar/sidebar";
import { useGetCategoriesQuery, useGetProductsQuery } from "./shared/baseApi";
import styles from "./styles/styles.module.scss";
import UserForm from "./Components/User/UserForm/UserForm";

function App() {
  const location = useLocation();
  const { data: products, error, isLoading } = useGetProductsQuery();

  const { data: categories } = useGetCategoriesQuery();
  const filterProducts = products?.filter((product) => product.price < 50);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className={styles.app}>
      <Header />
      <UserForm />
      <div className={styles.container}>
        <Sidebar />
        <AppRoutes />
      </div>
      {location.pathname === "/" && (
        <>
          <Products products={products || []} amount={5} title="Trending" />
          <Categoriess
            categories={categories || []}
            amount={6}
            title="Worth Seeing"
          />
          <Products
            products={filterProducts || []}
            amount={5}
            title="Less than 100$"
          />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
