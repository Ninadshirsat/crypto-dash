const SortSelector = ({ sortBy, onSortChange }) => {
  return (
    <div className="controls">
      <label htmlFor="sortBy">Sort by:</label>
      <select
        value={sortBy}
        id="sortBy"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="market_cap_desc">Market Cap (High to Low)</option>
        <option value="market_cap_asc">Market Cap (Low to High)</option>
        <option value="price_desc">Price (High to Low)</option>
        <option value="change_desc">24h Change(High to Low)</option>
        <option value="change_asc">24h Change (High to Low)</option>
      </select>
    </div>
  );
};

export default SortSelector;
