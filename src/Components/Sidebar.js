import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Filters</h3>
      <ul>
        <li>
            <label htmlFor='idealfor'>IDEAL FOR</label><br />
            <select id='idealfor' >
                <option >All</option>
                <option >Men</option>
                <option >Women</option>
            </select>
        </li>
        <li>
            <label htmlFor='occasion'>OCCASION</label><br />
            <select id='ocassion' >
                <option >All</option>
                <option >Bachelor Party</option>
                <option >Birthday</option>
                <option >Diwali</option>
            </select>
        </li>
        <li>
            <label htmlFor='fabric'>FABRIC</label><br />
            <select id='fabric' >
                <option >All</option>
                <option >Cotton</option>
                <option >Wool</option>
                <option >Linen</option>
            </select>
        </li>
        <li>
            <label htmlFor='rawmaterial'>RAW MATERIAL</label><br />
            <select id='rawmaterial' >
                <option >All</option>
                <option >Wool</option>
                <option >COTTON</option>
            </select>
        </li>
        <li>
            <label htmlFor='pattern'>PATTERN</label><br />
            <select id='pattern' >
                <option >All</option>
                <option >Plain</option>
                <option >Check</option>
                <option >Print</option>
            </select>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;