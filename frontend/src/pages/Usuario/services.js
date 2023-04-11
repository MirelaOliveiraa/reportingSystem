import api from "../../service/index";

class usuarioService {
  static list() {
    return api.get("/admin");
  }
  static listAluno() {
    return api.get("/aluno");
  }
}
export default usuarioService;
