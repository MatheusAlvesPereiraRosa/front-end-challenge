import "./index.css";

export const Button = ({ onClick }) => (
  <button onClick={onClick} className="btn-load">
    Load more data
  </button>
);
