import styles from "../styles/card.module.css";

interface CardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

const Card: React.FC<CardProps> = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
}) => (
  // <div className={styles.card}>
  //   <h3>Balance</h3>
  //   <p className="balance">${balance}</p>
  //   <p>{cardHolder}</p>
  //   <p>Valid Thru: {validThru}</p>
  //   <p>**** **** **** {cardNumber.slice(-4)}</p>
  // </div>

  <div className={styles.card}>
    <div className={styles.balance}>Balance</div>
    <div className={styles.amount}>$5,756</div>
    <div className={styles.cardDetails}>
      <div className={styles.cardHolder}>
        CARD HOLDER
        <br />
        Eddy Cusuma
      </div>
      <div className={styles.validThru}>
        VALID THRU
        <br />
        12/22
      </div>
    </div>
    <div className={styles.cardNumber}>3778 **** **** 1234</div>
    <div className={styles.chip}></div>
    <div className={styles.contactless}>
      <div className={styles.contactlessCircle}></div>
      <div className={styles.contactlessCircle}></div>
      <div className={styles.contactlessCircle}></div>
    </div>
  </div>
);

export default Card;
