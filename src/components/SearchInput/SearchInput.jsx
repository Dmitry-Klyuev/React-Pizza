import styles from './SearchInput.module.scss';
import React, {useRef} from "react";
import {useContext} from "react";
import {SearchContext} from "../../App";

export const SearchInput = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext)

    const inputRef = useRef(null)
    const removeValue = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    return (
        <div className={styles.root}>
            <svg className={styles.searchIcon}>
                <path xmlns="http://www.w3.org/2000/svg"
                      d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/>
            </svg>
            <input className={styles.input}
                   ref={inputRef}
                   value={searchValue}
                   type="text"
                   placeholder={'Поиск пиццы'}
                   onChange={event=>setSearchValue(event.target.value)}
            />
            {searchValue &&
                <svg className={styles.clearIcon}
                onClick={removeValue}
                >
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
                </svg>
            }

        </div>
    )
}