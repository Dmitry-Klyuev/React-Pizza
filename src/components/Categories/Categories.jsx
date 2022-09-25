import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../../features/filterSlice";


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