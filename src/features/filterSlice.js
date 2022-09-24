import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'],
    activeCategory: 0
}

export const filterSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        activeCategory: (state, payload) => {
           state.activeCategory = payload.item
        },
    },
})

export const { activeCategory } = filterSlice.actions

export default filterSlice.reducer