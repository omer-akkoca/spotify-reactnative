import { useEffect, useState } from "react";
import { fetchFavoriteSongs } from "../../services/song";
import { IFavoriteSong } from "../../types";
import { useAuth } from "../../providers";
import { useAppDispatch } from "../../types/store";
import { initialFavoriteSongs } from "../../store/slices/favorite_songs";

interface IUseFavoriteSongs {
    data: IFavoriteSong[];
    loading: boolean;
    error: string;
}

export const useFavoriteSongs = (): IUseFavoriteSongs => {

    const dispatch = useAppDispatch()
    const { user } = useAuth()

    const [data, setData] = useState<IFavoriteSong[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let isMounted = true

        const loadData = async () => {
            if (user?.uid) {
                try {
                    const result = await fetchFavoriteSongs({ userId: user.uid })
                    if (isMounted) {
                        setData(result)
                        dispatch(initialFavoriteSongs(result))
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
    }, [user])

    return { data, loading, error };
}