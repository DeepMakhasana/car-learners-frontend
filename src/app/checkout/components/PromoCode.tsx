import styles from "../checkout.module.css";

const PromoCode = () => {
  return (
    <div className={styles.promoCodeContainer}>
      <h3>Promo & Gift Code</h3>
      <div className={styles.promoCodeWrapper}>
        <form>
          <input type="text" name="promoCode" placeholder="Promo & Gift Code" />
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default PromoCode;
