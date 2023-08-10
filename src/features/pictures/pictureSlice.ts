import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'
//import type { RootState } from '../../app/store'
import ICardPicture from '../../Interfaces/ICardPicture'
import data from '../../../public/data.json'

export interface PicturesState {
    value: ICardPicture[]
}
const initialState: PicturesState = {
    value: data,
}
export const picturesSlice = createSlice({
    name: 'pictures',
    initialState,
    reducers: {
        addPicture: (state, action) => {
            state.value.push(action.payload)
        },
        deletePicture: (state, action) => {
            state.value = state.value.filter((item) => item.name !== action.payload)
        }
    },
})

export const { addPicture, deletePicture } = picturesSlice.actions
export default picturesSlice.reducer