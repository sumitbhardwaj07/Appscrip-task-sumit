import React from 'react';
import './Sidebar.css';

function Sidebar({ onChange }) {

    const categoryChangeHandler = (event) => {
        onChange(event.target.value);
      };

  return (
    <div className="sidebar">
      <h3>Filters</h3>
            <label htmlFor='idealfor'>Category</label><br />
            <select id='idealfor' onChange={categoryChangeHandler} >
                <option value="All">All</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">Jewellery</option>
                <option value="electronics">Electronics</option>
            </select>
    </div>
  );
}

export default Sidebar;