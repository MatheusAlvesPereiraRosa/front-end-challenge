import "./index.css";

export const SearchBar = ({ searchValue, handleChange }) => (
  <input
    type="search"
    className="search-input"
    placeholder="Digite sua pesquisa"
    value={searchValue}
    onChange={handleChange}
  />
);
