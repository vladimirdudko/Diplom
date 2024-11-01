import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Home from "../Home/home";
import SoloProduct from "../Products/Product/SoloProduct";
import Profile from "../Profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SoloProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
    </Routes>
  );
};
export default AppRoutes;
