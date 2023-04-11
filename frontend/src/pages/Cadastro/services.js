import api from "../../service/index";

class CadastroServices {
  static create(data) {
    return api.post("/admin", data);
  }
  static createAluno(data) {
    return api.post("/aluno", data);
  }
}
export default CadastroServices;
