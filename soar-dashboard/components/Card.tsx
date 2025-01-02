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
  <div className="card">
    <h3>Balance</h3>
    <p className="balance">${balance}</p>
    <p>{cardHolder}</p>
    <p>Valid Thru: {validThru}</p>
    <p>**** **** **** {cardNumber.slice(-4)}</p>
  </div>
);

export default Card;
