import { useState, useEffect } from "react";

export default function useStat(url) {
  const [stat, setStat] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);

      const data = await fetch(url).then(res => {
        if (res.status === 200) {
          setLoading(false);
          return res.json();
        } else {
          setError(true);
          setLoading(false);
        }
      });
      setStat(data);
    };

    setLoading(true);
    fetchData();
  }, [url]);

  return { stat, loading, error };
}
