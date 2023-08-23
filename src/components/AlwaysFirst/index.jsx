import "./index.scss";

const AlwaysFirst = () => {
  return (
    <form className="always-first">
      <h2 className="always-first__title">Always First</h2>
      <p className="always-first__content">
        Be the first to find out latest deals and exclusive offers and get 15%
        off your first order.
      </p>
      <input
        type="text"
        className="always-first__input"
        placeholder="Enter your email"
      />
      <button type="submit" className="always-first__button">
        Be the First
      </button>
    </form>
  );
};

export default AlwaysFirst;
