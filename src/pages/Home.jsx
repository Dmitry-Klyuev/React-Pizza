import React from 'react';
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";


export const Home = ({searchValue}) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [activeCategories, setActiveCategories] = React.useState(0);
    const [activeSort, setActiveSort] = React.useState('популярности ↓');

    const sort = ['популярности ↓', 'популярности ↑', 'цене ↓' ,'цене ↑', 'алфавиту ↓' , 'алфавиту ↑'];
    const sortCategory = activeCategories > 0 ? `category=${activeCategories}` : '';

    let sortBy = ''
    switch (activeSort) {
        case 'популярности ↓': sortBy = 'sortBy=rating'
            break;
        case 'популярности ↑': sortBy = 'sortBy=rating&order=desc'
            break
        case 'цене ↓': sortBy = 'sortBy=price'
            break
        case 'цене ↑' : sortBy = 'sortBy=price&order=desc'
            break
        case 'алфавиту ↓' : sortBy = 'sortBy=title'
            break
        case 'алфавиту ↑' : sortBy = 'sortBy=title&order=desc'
    }
    const search = searchValue ? `search=${searchValue}` : '';

    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://6314e211fa82b738f7501ac3.mockapi.io/items?${sortBy}&${search}&${sortCategory}`)
            .then(res => res.json())
            .then((data) => {
                setItems(data);
                setIsLoading(false);
            });
    }, [activeSort, activeCategories, searchValue]);

    return (
        <>
            <div className="content__top">
                <Categories
                    activeCategories={activeCategories}
                    setActiveCategories={(i) => setActiveCategories(i)}
                />
                <Sort
                    activeSort={activeSort}
                    setActiveSort={(i)=>setActiveSort(i)}
                    sort={sort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(8)].map((el, index) => <PizzaSkeleton key={index}/>)
                    : items.map((el, index) => (
                        <PizzaBlock {...el}
                                    key={index}/>
                    ))}
            </div>
        </>
    );
};