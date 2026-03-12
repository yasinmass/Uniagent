import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// ── Agent API ──────────────────────────────────────────────────────────────

/** GET /api/agents/ — fetch all agents */
export const getAgents = () => api.get('/agents/');

/** POST /api/agents/create/ — generate a new agent from a purpose string */
export const createAgent = (purpose) => api.post('/agents/create/', { purpose });

/** DELETE /api/agents/{id}/ — delete an agent by id */
export const deleteAgent = (id) => api.delete(`/agents/${id}/`);

// ── Chat API ───────────────────────────────────────────────────────────────

/** POST /api/chat/ — send a chat message to an agent */
export const sendChat = (agent_id, message, session_id) =>
  api.post('/chat/', { agent_id, message, session_id });

export default api;
