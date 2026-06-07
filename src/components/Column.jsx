import React from 'react';
import TaskCard from './TaskCard';

const colConfig = {
  todo: { label: 'Por hacer', color: '#64748b' },
  'in-progress': { label: 'En curso', color: '#3b82f6' },
  done: { label: 'Hecho', color: '#22c55e' }
};

export default function Column({ status, tasks }) {
  const cfg = colConfig[status];
  const totalPoints = tasks.reduce((s,t) => s + t.points, 0);
  return (
    <div style={{ background: '#0f172a', borderRadius: 10, padding: 16, minWidth: 280, flex: 1, border: '1px solid #1e293b' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: cfg.color }} />
          <span style={{ color: '#f1f5f9', fontWeight: 600, fontSize: 13 }}>{cfg.label}</span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ background: '#1e293b', color: '#94a3b8', borderRadius: 12, padding: '2px 8px', fontSize: 11 }}>{tasks.length} tareas</span>
          <span style={{ background: '#1e293b', color: '#64748b', borderRadius: 12, padding: '2px 8px', fontSize: 11 }}>{totalPoints} pts</span>
        </div>
      </div>
      <div>
        {tasks.map(t => <TaskCard key={t.id} task={t} />)}
        {tasks.length === 0 && <div style={{ textAlign: 'center', color: '#334155', padding: '24px 0', fontSize: 12 }}>Sin tareas</div>}
      </div>
    </div>
  );
}
