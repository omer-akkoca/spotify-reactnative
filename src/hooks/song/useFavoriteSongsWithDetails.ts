import { useEffect, useState } from "react";
import { fetchFavoriteSongWithDetails } from "../../services";
import { ISong } from "../../types";
import { useAuth } from "../../providers";
import { useAppSelector } from "../../types/store";
import { getFavoriteSongs } from "../../store/slices/favorite_songs";

interface IUseFavoriteSongsWithDetails {
    data: ISong[];
    loading: boolean;
    error: string;
}

export const useFavoriteSongsWithDetails = (): IUseFavoriteSongsWithDetails => {

    const { user } = useAuth()
    const favoritesSongs = useAppSelector(getFavoriteSongs)

    const [data, setData] = useState<ISong[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let isMounted = true

        const loadData = async () => {
            if (user?.id) {
                try {
                    const result = await fetchFavoriteSongWithDetails(favoritesSongs)
                    if (isMounted) {
                        setData(result)
                        setLoading(false)
                    }
                } catch (err) {
                    if (isMounted) {
                        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
                        setError(errorMessage)
                        setLoading(false)
                    }
                }
            }
        }

        loadData();

        return () => { isMounted = false }
    }, [favoritesSongs])

    return { data, loading, error };
}