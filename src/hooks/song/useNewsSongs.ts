import { useEffect, useState } from "react";
import { fetchNewsSongs } from "../../services/song";
import { ISong } from "../../types";

interface IUseNewsSongs {
    data: ISong[];
    loading: boolean;
    error: string;
}

export const useNewsSongs = (): IUseNewsSongs => {
    const [data, setData] = useState<ISong[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let isMounted = true

        const loadData = async () => {
            try {
                const result = await fetchNewsSongs()
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