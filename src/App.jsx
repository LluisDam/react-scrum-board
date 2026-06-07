import React, { useState } from 'react';
import Column from './components/Column';
import KPIPanel from './components/KPIPanel';
import { initialTasks, initialSprints } from './data/initialData';

export default function App() {
  const [tasks] = useState(initialTasks);
  const [activeSprint, setActiveSprint] = useState(initialSprints[1]);
  const sprintTasks = tasks.filter(t => t.sprintId === activeSprint?.id);
  const backlog = tasks.filter(t => !t.sprintId);

  return (
    <div style={{ minHeight: '100vh', background: '#020617', fontFamily: 'Inter, system-ui, sans-serif', padding: 24 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ color: '#f1f5f9', margin: 0, fontSize: 22, fontWeight: 700 }}>🚀 Scrum Board</h1>
        <p style={{ color: '#64748b', margin: '4px 0 0', fontSize: 13 }}>Gestion agil de proyectos · Kit Digital</p>
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {initialSprints.map(s => (
          <button key={s.id} onClick={() => setActiveSprint(s)} style={{
            padding: '6px 16px', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 500,
            background: activeSprint?.id === s.id ? '#3b82f6' : '#1e293b',
            color: activeSprint?.id === s.id ? '#fff' : '#94a3b8'
          }}>{s.name}</button>
        ))}
      </div>
      <KPIPanel tasks={tasks} sprint={activeSprint} />
      {activeSprint && (
        <div style={{ background: '#1e293b', borderRadius: 8, padding: '10px 14px', marginBottom: 20, borderLeft: '3px solid #3b82f6' }}>
          <span style={{ color: '#64748b', fontSize: 11 }}>Sprint Goal: </span>
          <span style={{ color: '#94a3b8', fontSize: 12 }}>{activeSprint.goal}</span>
          <span style={{ color: '#475569', fontSize: 11, marginLeft: 16 }}>{activeSprint.startDate} → {activeSprint.endDate}</span>
        </div>
      )}
      <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
        {['todo','in-progress','done'].map(status => (
          <Column key={status} status={status} tasks={sprintTasks.filter(t => t.status === status)} />
        ))}
      </div>
      {backlog.length > 0 && (
        <div>
          <h3 style={{ color: '#64748b', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>📋 Backlog ({backlog.length})</h3>
          <div style={{ display: 'flex', gap: 16 }}>
            <Column status="todo" tasks={backlog} />
            <div style={{ flex: 2 }} />
          </div>
        </div>
      )}
    </div>
  );
}
