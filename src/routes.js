import UserController from './controllers/UserController';

export default (server) => {
  // USER
  server.get(`/api/users`, UserController.getAll);
  server.post(`/api/users`, UserController.insert)
  server.put(`/api/users/:id`, UserController.update);
  server.delete(`/api/users/:id`, UserController.delete);
}