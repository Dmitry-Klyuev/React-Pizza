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
            {/*<li className={active === 0 && 'active'} onClick={()=>setActive(0)}>Все</li>*/}
            {/*<li className={active === 1 && 'active'} onClick={()=>setActive(1)}>Мясные</li>*/}
            {/*<li className={active === 2 && 'active'} onClick={()=>setActive(2)}>Вегетарианская</li>*/}
            {/*<li className={active === 3 && 'active'} onClick={()=>setActive(3)}>Гриль</li>*/}
            {/*<li className={active === 4 && 'active'} onClick={()=>setActive(4)}>Острые</li>*/}
            {/*<li className={active === 5 && 'active'} onClick={()=>setActive(5)}>Закрытые</li>*/}
        </ul>
    </div>;
};