import { useState, useEffect } from "react";
import { Cat } from "../types";

export const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/cats/all");

        if (!response.ok) {
          throw new Error(`Failed to fetch cats: ${response.status}`);
        }

        const data = await response.json();
        setCats(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch cats");
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return { cats, loading, error };
};
