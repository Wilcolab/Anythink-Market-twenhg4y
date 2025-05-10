import React from 'react';
import { useRouters } from '../hooks/useRouters';
import { format } from 'date-fns';

export const RouterList: React.FC = () => {
  const { routers, loading, error } = useRouters();

  if (loading) return <p>Loading routers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Routers</h2>
      <ul>
        {routers.map(router => (
          <li key={router.id}>
            <strong>{router.name}</strong> <br />
            Type: {router.type} <br />
            Updated: {format(new Date(router.updatedAt), 'PPpp')}
          </li>
        ))}
      </ul>
    </div>
  );
};
