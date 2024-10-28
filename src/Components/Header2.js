import React from 'react';
import './Header2.css';

const NextHeader = ({productCount,hideFilter, setHideFilter}) => {

  const hideFilterHandler = ()=>{
    setHideFilter(!hideFilter);
  }
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">DISCOVER OUR PRODUCTS</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
      <div className="filter-bar">
        <div className="filter-option" onClick={hideFilterHandler}>
          {hideFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
          </div>
        <div className="items-count">{productCount} ITEMS</div>
      </div>
    </div>
  );
};

export default NextHeader;
