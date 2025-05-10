import React, { useState } from 'react';
import { useRouters } from '../hooks/useRouters';
import { format } from 'date-fns';
import { Router } from '../types';
import { RouterDetails } from './RouterDetails';

export const RouterList: React.FC = () => {
    const { routers, loading, error } = useRouters();
    const [selectedRouter, setSelectedRouter] = useState<Router | null>(null);

    if (loading) return <p>Loading routers...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <ul style={{ flex: 1 }}>
                {routers.map(router => (
                    <li key={router.id} style={{ marginBottom: '1rem' }}>
                        <strong>{router.name}</strong><br />
                        Type: {router.type}<br />
                        Updated: {format(new Date(router.updatedAt), 'PPpp')}<br />
                        <button style={{ marginTop: '0.5rem' }} onClick={() => setSelectedRouter(router)}>
                            View Details
                        </button>
                    </li>
                ))}
            </ul>

            {selectedRouter && (
                <div style={{ flex: 1, padding: '1rem', border: '1px solid #ccc' }}>
                    <RouterDetails router={selectedRouter} />
                </div>
            )}
        </div>
    );
};
