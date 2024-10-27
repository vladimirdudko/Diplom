import styles from "./style.module.scss";
import BG from "../../image/bg.png";
import Button from "../Button";
import BIGSALE from "../../image/bigsale.png";

const Poster = () => {
  return (
    <div className={styles.con}>
      <div className={styles.title}>
        <img src={BIGSALE} alt="#" />
      </div>
      <div className={styles.description}>
        <div className={styles.product}>
          <div className={styles.sale}>
            <h3>the bestseller of 2024 </h3>
          </div>
          <div className={styles.productname}>
            <p>LENNON r2d2 with NVIDIA 5090 TI</p>
          </div>
          <Button>Show Now</Button>
        </div>
        <div className={styles.bgimage}>
          <img src={BG} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Poster;
