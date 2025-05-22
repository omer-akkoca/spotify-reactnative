import { useEffect, useState } from "react";
import { fetchPlayList } from "../../services";
import { ISong } from "../../types";

interface IUsePlaylist {
    data: ISong[];
    loading: boolean;
    error: string;
}

export const usePlaylist = (): IUsePlaylist => {
    const [data, setData] = useState<ISong[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let isMounted = true

        const loadData = async () => {
            try {
                const result = await fetchPlayList()
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
        };

        loadData();

        return () => { isMounted = false }
    }, [])

    return { data, loading, error };
}