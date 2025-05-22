import { useCallback, useState } from "react";
import { addFavoriteSong, removeFavoriteSong } from "../../services";
import { useAuth } from "../../providers";
import { useAppDispatch, useAppSelector } from "../../types/store";
import { addFavoriteSongToStore, isFavoriteSong, removeFavoriteSongFromStore } from "../../store/slices/favorite_songs";

interface IUseAddOrRemoveFavoriteSong {
    mutate: Function,
    loading: boolean;
    error: string;
}

export const useAddOrRemoveFavoriteSong = ({ songId = "" }): IUseAddOrRemoveFavoriteSong => {

    const { user } = useAuth()
    const dispatch = useAppDispatch()

    const isFavorite = useAppSelector(state => isFavoriteSong(state, songId))

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const mutate = useCallback(() => {
        let isMounted = true

        const loadData = async () => {
            try {
                if (isFavorite) {
                    await removeFavoriteSong(user!.uid, songId)
                    dispatch(removeFavoriteSongFromStore(songId))
                } else {
                    const newFavSong = await addFavoriteSong(user!.uid, songId)
                    dispatch(addFavoriteSongToStore(newFavSong))
                }
            } catch (err) {
                if (isMounted) {
                    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
                    setError(errorMessage)
                    setLoading(false)
                }
            }
        };

        loadData();

        return () => { isMounted = false }
    }, [songId, user, isFavorite])


    return { mutate, loading, error };
}