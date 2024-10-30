import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Home from "../Home/home";
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
