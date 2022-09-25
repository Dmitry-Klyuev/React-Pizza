import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: {
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
            state.sort = action.payload
        }
    },
})

export const { setCategoryId, setActiveSort } = filterSlice.actions

export default filterSlice.reducer