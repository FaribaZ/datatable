// SearchBarComponent.jsx
import React from "react";
import SearchBar from "material-ui-search-bar";

interface SearchProps {
  searchQuery: string;
  handleSearch: (searchedVal: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, handleSearch }) => {
  return (
    <SearchBar
      value={searchQuery}
      onChange={handleSearch}
      onRequestSearch={() => handleSearch(searchQuery)}
    />
  );
};

export default Search;
