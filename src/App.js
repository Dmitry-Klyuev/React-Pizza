import './scss/app.scss';
import {Header} from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {NotFound} from "./pages/NotFound";
import React from 'react'

export const SearchContext = React.createContext({});

function App() {
    const [searchValue, setSearchValue] = React.useState('')

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/cart'} element={<Cart/>}/>
                            <Route path={'*'} element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </SearchContext.Provider>
    )
}

export default App;
