import {useState} from "react";

export const Categories = () => {
    const [active, setActive] = useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

    return <div className="categories">
        <ul>
            {categories.map((el, index) => (
                <li key={index}
                    className={active === index ? 'active' : undefined}
                    onClick={() => setActive(index)}>
                    {el}
                </li>
                ))}
        </ul>
    </div>;
};