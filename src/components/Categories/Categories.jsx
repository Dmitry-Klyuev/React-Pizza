import {useState} from "react";

export const Categories = ({activeCategories, setActiveCategories}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

    return <div className="categories">
        <ul>
            {categories.map((el, index) => (
                <li key={index}
                    className={activeCategories === index ? 'active' : undefined}
                    onClick={() => setActiveCategories(index)}>
                    {el}
                </li>
                ))}
        </ul>
    </div>;
};