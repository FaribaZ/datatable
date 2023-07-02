// SearchBarComponent.jsx
import React from "react";
import SearchBar from "material-ui-search-bar";

interface SearchBarComponentProps {
  searchQuery: string;
  handleSearch: (searchedVal: string) => void;
}

const SearchBarComponent: React.FC<SearchBarComponentProps> = ({
  searchQuery,
  handleSearch,
}) => {
  return (
    <SearchBar
      value={searchQuery}
      onChange={handleSearch}
      onRequestSearch={() => handleSearch(searchQuery)}
    />
  );
};

export default SearchBarComponent;
