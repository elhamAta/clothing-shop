import React from 'react';
import Button from '../Button/Button';

const FilterBox = () => (
    <div className="filter-box">
        <input type="text" value="" className="txt" placeholder="عنوان یا کلمه کلیدی ..." />
        <select className="txt">
            <option>دسته بندی</option>
        </select>
        <input type="text" value="" className="txt" placeholder="از تاریخ" />
        <input type="text" value="" className="txt" placeholder="تا تاریخ" />
        <Button className="btn">جستجو</Button>
    </div>

);

export default FilterBox