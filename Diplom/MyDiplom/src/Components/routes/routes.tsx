import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Home from "../Home/home";
import SoloProduct from "../Products/Product/SoloProduct";
import Profile from "../Profile/Profile";
import Cart from "../Cart/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SoloProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CART} element={<Cart />} />
    </Routes>
  );
};
export default AppRoutes;
