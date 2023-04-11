import api from "../../service/index";

class aulaService {
  static list() {
    return api.get("/aulas");
  }
  static create(data) {
    return api.post("/aulas",data);
  }
}
export default aulaService;
