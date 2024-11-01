import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../shared/baseApi";
import { useEffect } from "react";
import { ROUTES } from "../../../utils/routes";
import Product from "./Product";

const SoloProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isError } = useGetProductByIdQuery(
    Number(id)
  );
  console.log(data);
  useEffect(() => {
    if (!isFetching && !isLoading && (isError || !data)) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isError, data, navigate]);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data ? (
        <Product
          id={data.id}
          images={data.images}
          title={data.title}
          description={data.description}
          price={data.price}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SoloProduct;
