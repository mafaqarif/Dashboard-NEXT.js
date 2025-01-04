import Image from "next/image";
import styles from "../styles/transactionItem.module.css";

interface TransactionItem {
  imageUrl: string;
  title: string;
  subTitle: string;
  price: string;
  positive: boolean;
}

const TransactionItem: React.FC<TransactionItem> = ({
  imageUrl,
  title,
  subTitle,
  price,
  positive,
}) => {
  return (
    <div className={styles.transactionItem}>
      <Image src={imageUrl} alt={imageUrl} width={55} height={55} />
      <div className={styles.transactionInfo}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <p className={positive ? styles.positive : styles.negative}>{price}</p>
    </div>
  );
};

export default TransactionItem;
