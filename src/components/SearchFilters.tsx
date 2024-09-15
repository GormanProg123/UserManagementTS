import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchItem, setSortBy } from '../redux/userSlice';
import { Rootstate } from '../redux/store';
import style from './searchTab.module.css'

export const SearchFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: Rootstate) => state.filters);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchItem(e.target.value)); 
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value as 'name' | 'username' | 'email' | 'phone')); 
  };

  return (
    <div>
      <div className={style.searchitem}>
      <input
        type="text"
        value={filters.searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name"
        className={style.inputitem}
      />
      <select className={style.chooseitem} value={filters.sortBy} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>
      </div>
    </div>
  );
};

