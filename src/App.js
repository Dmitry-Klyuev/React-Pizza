import './scss/app.scss';
import {Header} from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {NotFound} from "./pages/NotFound";
import {useState} from "react";

function App() {
    const [searchValue, setSearchValue] = useState()

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path={'/'} element={<Home searchValue={searchValue}/>}/>
                        <Route path={'/cart'} element={<Cart />}/>
                        <Route path={'*'} element={<NotFound/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
