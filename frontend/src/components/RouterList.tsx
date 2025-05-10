import React, { useState } from 'react';
import { useRouters } from '../hooks/useRouters';
import { format } from 'date-fns';
import { Router } from '../types';
import { RouterDetails } from './RouterDetails';

export const RouterList: React.FC = () => {
  const { routers, loading, error } = useRouters();
  const [selectedRouter, setSelectedRouter] = useState<Router | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'updatedAt'>('name');

  if (loading) return <p>Loading routers...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredRouters = routers.filter(
    (router) => selectedType === 'all' || router.type === selectedType
  );

  const sortedRouters = [...filteredRouters].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    }
  });

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Filter by Type:&nbsp;
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="all">All</option>
            <option value="wifi">WiFi</option>
            <option value="enterprise">Enterprise</option>
            <option value="home">Home</option>
          </select>
        </label>

        <label style={{ marginLeft: '1rem' }}>
          Sort by:&nbsp;
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'name' | 'updatedAt')}>
            <option value="name">Name (A-Z)</option>
            <option value="updatedAt">Last Updated</option>
          </select>
        </label>
      </div>

      <p>
        Showing: <strong>{selectedType === 'all' ? 'All Types' : selectedType}</strong> | 
        Sorted by: <strong>{sortBy}</strong>
      </p>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <ul style={{ flex: 1 }}>
          {sortedRouters.map((router) => (
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
    </div>
  );
};
