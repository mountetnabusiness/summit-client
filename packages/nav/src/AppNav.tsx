import React from 'react';
import { portals } from './portals.config';

interface AppNavProps {
  activeKey: string;
}

export function AppNav({ activeKey }: AppNavProps) {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 20px',
      background: '#1A3F5C',
      borderBottom: '1px solid #28B4A6',
    }}>
      {portals.map((p) => {
        const isActive = p.key === activeKey;
        return (
          <a
            key={p.key}
            href={p.url}
            style={{
              fontSize: '13.5px',
              fontWeight: isActive ? 600 : 400,
              color: isActive ? '#28B4A6' : '#ffffffaa',
              textDecoration: 'none',
              padding: '4px 12px',
              borderRadius: '999px',
              background: isActive ? 'rgba(40,180,166,0.15)' : 'transparent',
              transition: 'all 0.15s',
            }}
          >
            {p.label}
          </a>
        );
      })}
    </nav>
  );
}
