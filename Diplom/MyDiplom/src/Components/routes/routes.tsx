import { Route, Routes } from "react-router-dom";
import Home from "../Home/home";
import { ROUTES } from "../../utils/routes";
import SoloProduct from "../Products/Product/SoloProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SoloProduct />} />
    </Routes>
  );
};
export default AppRoutes;
