import React, { useState } from 'react';

const BlogFilters = ({ setFilters }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const applyFilters = () => {
    setFilters({ search, category });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={handleSearch}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Tech">Tech</option>
        <option value="Health">Health</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default BlogFilters;
