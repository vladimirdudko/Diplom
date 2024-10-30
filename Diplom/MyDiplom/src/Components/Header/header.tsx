import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "./style.module.scss";
import LOGO from "../../image/logo.svg";
import AVATAR from "../../image/avatar.svg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="SHOP" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>guest</div>
        </div>
        <form className={styles.form}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchIcon style={{ marginRight: "8px", color: "#576067" }} />
            <input
              type="search"
              name="search"
              placeholder="search products..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className={styles.box}>123123</div>}
        </form>
        <div className={styles.accaunt}>
          <Link to={ROUTES.HOME}>
            <FavoriteBorderIcon color="secondary" />
          </Link>
          <Link to={ROUTES.CART}>
            <ShoppingCartIcon color="secondary" />
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
