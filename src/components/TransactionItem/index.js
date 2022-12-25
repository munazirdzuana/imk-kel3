import './index.css';

const TransactionItem = (props) => {
  /* eslint-disable-next-line */
  const { transactionDetails, deleteTransaction } = props;
  const {
    /* eslint-disable-next-line */
    id, title, amount, type,
  } = transactionDetails;

  const onDeleteTransaction = () => {
    deleteTransaction(id);
  };

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">
        Rs
        {' '}
        {amount}
      </p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
          /* eslint-disable-next-line */
          testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;