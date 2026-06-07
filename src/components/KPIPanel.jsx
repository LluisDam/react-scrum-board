import React from 'react';

function KPICard({ label, value, sub, color }) {
  return (
    <div style={{ background: '#1e293b', borderRadius: 8, padding: '14px 18px', border: `1px solid ${color}33`, flex: 1, minWidth: 120 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: '#64748b', marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

export default function KPIPanel({ tasks, sprint }) {
  const st = sprint ? tasks.filter(t => t.sprintId === sprint.id) : tasks;
  const done = st.filter(t => t.status === 'done');
  const totalPts = st.reduce((s,t) => s+t.points, 0);
  const donePts = done.reduce((s,t) => s+t.points, 0);
  const pct = totalPts > 0 ? Math.round(donePts/totalPts*100) : 0;
  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ color: '#94a3b8', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
        KPIs {sprint ? `— ${sprint.name}` : '— Global'}
      </h3>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <KPICard label="Completado" value={`${pct}%`} sub={`${donePts}/${totalPts} pts`} color="#22c55e" />
        <KPICard label="Hechas" value={done.length} sub={`${donePts} story points`} color="#22c55e" />
        <KPICard label="En curso" value={st.filter(t=>t.status==='in-progress').length} color="#3b82f6" />
        <KPICard label="Pendientes" value={st.filter(t=>t.status==='todo').length} color="#64748b" />
        {sprint && <KPICard label="Velocidad" value={sprint.velocity} sub="pts/sprint" color="#a855f7" />}
      </div>
      <div style={{ marginTop: 12, background: '#1e293b', borderRadius: 6, overflow: 'hidden', height: 6 }}>
        <div style={{ width: `${pct}%`, height: '100%', background: '#22c55e', transition: 'width 0.5s' }} />
      </div>
    </div>
  );
}
