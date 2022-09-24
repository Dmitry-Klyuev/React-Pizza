import {useDispatch, useSelector} from "react-redux";
import {filterSlice} from "../../features/filterSlice";


export const Categories = () => {
    const categories = useSelector(state => state.filterSlice.categories)
    const activeCategory = useSelector(state => state.filterSlice.activeCategory)
    const dispatch = useDispatch();

    return <div className="categories">
        <ul>
            {categories.map((el, index) => (
                <li key={index}
                    className={activeCategory === index ? 'active' : undefined}
                    onClick={() => dispatch(activeCategory({index}))}>
                    {el}
                </li>
                ))}
        </ul>
    </div>;
};