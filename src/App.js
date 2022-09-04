import './scss/app.scss';
import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://6314e211fa82b738f7501ac3.mockapi.io/items')
            .then(res => res.json())
            .then(data => setItems(data));
    },[])
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {items.length > 0 && items.map((el, index) => (
                                <PizzaBlock {...el}
                                    key={index}
                                />
                            ))}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default App;
