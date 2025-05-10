// src/hooks/useRouters.ts
import { useEffect, useState } from 'react';
import { RouterBase } from '../types';

export function useRouters() {
  const [routers, setRouters] = useState<RouterBase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRouters = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_CODESPACE_BACKEND_URL}/routers`);
        if (!res.ok) throw new Error('Failed to fetch routers');
        const data = await res.json();
        setRouters(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchRouters();
  }, []);

  return { routers, loading, error };
}
