import React from 'react';
import './directory.style.scss';
import CategoryItem from '../category-items/category-item';

const Directory = ({ categories }) => {
    return(
        <div className='categories-container'>
        {categories.map((category) => {
            return(
            <CategoryItem key={category.id} category={category}/>
            );
        })}
        </div>
    )
}

export default Directory;