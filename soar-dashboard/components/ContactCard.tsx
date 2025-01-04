import styles from "../styles/contactCard.module.css";

interface ContactCardProps {
  name: string;
  title: string;

  imageUrl: string;
  selected: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  title,
  imageUrl,
  selected,
}) => {
  return (
    <div
      className={
        selected
          ? `${styles.contactCard} ${styles.selected} `
          : `${styles.contactCard}`
      }
    >
      <img src={imageUrl} alt={name} className={styles.contactImage} />
      <div className={styles.contactInfo}>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ContactCard;
