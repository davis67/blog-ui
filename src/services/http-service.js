import http from "./../axiosApi";

class HttpService {
  getAll() {
    return http.get("/posts/");
  }

  get(id) {
    return http.get(`/posts/show/${id}`);
  }

  create(data) {
    return http.post("/posts/create", data);
  }

  update(id, data) {
    return http.put(`/posts/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/posts/delete/${id}`);
  }

  findByCategory(category) {
    return http.get(`/posts?category=${category}`);
  }
}

export default new HttpService();
