import React from 'react';
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import {Pagination} from "../components/Pagination/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../features/filterSlice";


export const Home = () => {
    const {categoryId, sort} = useSelector(state => state.filterSlice)
    const dispatch = useDispatch();

    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentPagination, setCurrentPagination] = React.useState(1)

    //generate get params
    const sortCategory = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = `sortBy=${sort.sortProperty}`
    const search = searchValue ? `search=${searchValue}` : '';
    const paginationPage = `limit=4&page=${currentPagination}`

    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://6314e211fa82b738f7501ac3.mockapi.io/items?${sortBy}&${search}&${sortCategory}&${paginationPage}`)
            .then(res => res.json())
            .then((data) => {
                setItems(data);
                setIsLoading(false);
            });
    }, [sortCategory, sortBy, search, paginationPage]);

    return (
        <>
            <div className="content__top">
                <Categories
                    activeCategories={categoryId}
                    setActiveCategories={(i) => dispatch(setCategoryId(i))}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(4)].map((el, index) => <PizzaSkeleton key={index}/>)
                    : items.map((el, index) => (
                        <PizzaBlock {...el}
                                    key={index}/>
                    ))}
            </div>
            <Pagination
                currentPagination={currentPagination}
                setCurrentPagination={setCurrentPagination}
            />
        </>
    );
};