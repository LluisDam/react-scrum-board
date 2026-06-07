import React from 'react';

const priorityColors = { high: '#ef4444', medium: '#f59e0b', low: '#22c55e' };
const priorityLabels = { high: 'Alta', medium: 'Media', low: 'Baja' };

export default function TaskCard({ task }) {
  return (
    <div style={{
      background: '#1e293b', border: '1px solid #334155', borderRadius: 8,
      padding: '12px', marginBottom: 8,
      borderLeft: `3px solid ${priorityColors[task.priority]}`
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <p style={{ margin: 0, color: '#f1f5f9', fontSize: 13, fontWeight: 500, flex: 1 }}>{task.title}</p>
        <span style={{ background: '#0f172a', color: '#94a3b8', borderRadius: 12, padding: '2px 8px', fontSize: 11, marginLeft: 8 }}>
          {task.points} pts
        </span>
      </div>
      {task.description && (
        <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: 11 }}>{task.description}</p>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, background: priorityColors[task.priority] + '22', color: priorityColors[task.priority] }}>
          {priorityLabels[task.priority]}
        </span>
        {task.assignee && <span style={{ fontSize: 11, color: '#94a3b8' }}>👤 {task.assignee}</span>}
      </div>
    </div>
  );
}
