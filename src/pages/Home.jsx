import React from 'react'
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";


export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        fetch('https://6314e211fa82b738f7501ac3.mockapi.io/items')
            .then(res => res.json())
            .then((data) => {
                setItems(data)
                setIsLoading(false)
            })
    }, []);
    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
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