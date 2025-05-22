import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFavoriteSong } from '../../types'
import { RootState } from '../../types/store'

export interface IFavoriteSongsState {
    favoriteSongs: IFavoriteSong[]
}

const initialState: IFavoriteSongsState = {
    favoriteSongs: []
}

const favoriteSongsSlice = createSlice({
    name: 'favorite_songs',
    initialState,
    reducers: {
        initialFavoriteSongs: (state, action: PayloadAction<IFavoriteSong[]>) => {
            state.favoriteSongs = action.payload;
        },
        addFavoriteSongToStore: (state, action: PayloadAction<IFavoriteSong>) => {
            state.favoriteSongs.push(action.payload)
        },
        removeFavoriteSongFromStore: (state, action: PayloadAction<string>) => {
            const deletedFavSong = state.favoriteSongs.find(e => e.songId === action.payload)
            state.favoriteSongs = state.favoriteSongs.filter(e => e.songId !== deletedFavSong!.songId);
        }
    }
})

export const { initialFavoriteSongs, addFavoriteSongToStore, removeFavoriteSongFromStore } = favoriteSongsSlice.actions;

export const getFavoriteSongs = (state: RootState) => state.favoriteSongs.favoriteSongs;
export const isFavoriteSong = (state: RootState, songId: string) => state.favoriteSongs.favoriteSongs.find(e => e.songId === songId) !== undefined

export default favoriteSongsSlice.reducer