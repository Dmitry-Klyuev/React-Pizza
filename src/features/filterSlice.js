import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    currentPaginatePage: 1,
    activeSort: {
        name: 'популярности ↓',
        sortProperty: 'rating',
    }
}

export const filterSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
           state.categoryId = action.payload
        },
        setActiveSort: (state, action) => {
            state.activeSort = action.payload
        },
        SetCurrenPaginatePage: (state, action) => {
            state.currentPaginatePage = action.payload
        },
        setCurrentFilter: (state, action) => {
            state.categoryId = +action.payload.categoryId
            state.currentPaginatePage = +action.payload.currentPaginatePage
            state.activeSort = action.payload.activeSort
        }
    },
})

export const { setCategoryId, setActiveSort, SetCurrenPaginatePage, setCurrentFilter } = filterSlice.actions

export default filterSlice.reducer