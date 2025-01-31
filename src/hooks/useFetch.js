import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true);

            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) {
                    console.log(res);
                    throw new Error("HTTP error! status:" + res.status);
                } else {
                    const json = await res.json();
                    setData(json);
                    setError(null);
                }
            } catch (e) {
                if (e.name === "AbortError") {
                    console.log("Fetch aborted");
                } else {
                    setError("couldn't fetch the data");
                }
            }

            setIsPending(false);
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, isPending, error };
};
