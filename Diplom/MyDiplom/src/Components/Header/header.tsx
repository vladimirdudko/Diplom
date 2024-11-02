import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../features/store";
import { useGetProductQuery } from "../../shared/baseApi";
import { toggleForm } from "../../features/Slice/user/User";
import { ROUTES } from "../../utils/routes";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./style.module.scss";
import LOGO from "../../image/logo.svg";
import AVATAR from "../../image/avatar.svg";

interface IProductSearch {
  title: string;
  id: number;
  image: string;
}

const Header: FC<IProductSearch> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });
  const { currentUser, cart } = useSelector(
    (state: RootStateType) => state.user
  );
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useGetProductQuery({ title: search });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);
  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="SHOP" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
        </div>
        <form className={styles.form}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchIcon style={{ marginRight: "8px", color: "#576067" }} />
            <input
              type="search"
              name="search"
              placeholder="search products..."
              autoComplete="off"
              onChange={handleSearch}
              value={search}
            />
          </div>
          {search && (
            <div className={styles.box}>
              {isLoading
                ? "Loading"
                : !data?.length
                ? "No results"
                : data.map((product) => {
                    const imageUrl = product.images[0];

                    return (
                      <Link
                        className={styles.linksearch}
                        key={product.id}
                        to={`/products/${product.id}`}
                      >
                        <div
                          className={styles.imageSearch}
                          style={{
                            backgroundImage: `url(${imageUrl})`,
                          }}
                        />
                        <div className={styles.titleSearch}>
                          {product.title}
                        </div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>
        <div className={styles.accaunt}>
          <Link to={ROUTES.HOME}>
            <FavoriteBorderIcon color="secondary" />
          </Link>
          <Link to={ROUTES.CART}>
            <ShoppingCartIcon color="secondary" />
            {!!cart.length && (
              <span className={styles.count}>{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
