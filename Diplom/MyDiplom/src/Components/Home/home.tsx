import { useGetProductsQuery } from "../../shared/baseApi";
import Poster from "../Poster/poster";
import Products from "../Products/Products";

const Home = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  return (
    <div>
      <Poster />
      {/* <Products products={products || []} amount={5} title="Trending" /> */}
    </div>
  );
};
export default Home;
