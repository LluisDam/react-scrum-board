import { v4 as uuidv4 } from 'uuid';

export const initialSprints = [
  { id: 'sprint-1', name: 'Sprint 1', goal: 'Setup infraestructura base', startDate: '2024-01-08', endDate: '2024-01-19', velocity: 34 },
  { id: 'sprint-2', name: 'Sprint 2', goal: 'Modulo de clientes y proyectos', startDate: '2024-01-22', endDate: '2024-02-02', velocity: 28 }
];

export const initialTasks = [
  { id: uuidv4(), title: 'Configurar entorno de desarrollo', description: 'Setup Docker, CI/CD pipeline', status: 'done', priority: 'high', points: 3, sprintId: 'sprint-1', assignee: 'Laura G.' },
  { id: uuidv4(), title: 'Diseno base de datos', description: 'Esquema relacional Oracle DB', status: 'done', priority: 'high', points: 5, sprintId: 'sprint-1', assignee: 'Marc T.' },
  { id: uuidv4(), title: 'API REST endpoints basicos', description: 'CRUD proyectos y tareas con Kotlin', status: 'done', priority: 'high', points: 8, sprintId: 'sprint-1', assignee: 'Laura G.' },
  { id: uuidv4(), title: 'Integracion API externa cliente', description: 'CRM del cliente. -15% tiempo procesamiento', status: 'in-progress', priority: 'high', points: 13, sprintId: 'sprint-2', assignee: 'Marc T.' },
  { id: uuidv4(), title: 'Dashboard de KPIs', description: 'Metricas en tiempo real', status: 'in-progress', priority: 'medium', points: 8, sprintId: 'sprint-2', assignee: 'Laura G.' },
  { id: uuidv4(), title: 'Testing unitario e integracion', description: 'Cobertura minima 80%', status: 'todo', priority: 'medium', points: 5, sprintId: 'sprint-2', assignee: null },
  { id: uuidv4(), title: 'Documentacion API Swagger', description: 'Documentar todos los endpoints REST', status: 'todo', priority: 'low', points: 3, sprintId: 'sprint-2', assignee: null },
  { id: uuidv4(), title: 'Deploy en produccion', description: 'Configurar servidor y dominio cliente', status: 'todo', priority: 'high', points: 5, sprintId: null, assignee: null }
];

export const teamMembers = ['Laura G.', 'Marc T.', 'Sofia R.', 'Andreu M.'];
