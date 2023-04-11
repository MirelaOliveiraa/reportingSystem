import api from './services/index';

class ChamadoServices {
  static create(data) {
    return api.post("/chamados", data);
  }
   static update(data) {
    return api.put(`/chamados/${data.id}`, data);
  }
   static list() {
    return api.get("/chamados");
  }
  static delete(id) {
    return api.delete(`/chamados/${id}`);
  }
  static search(responsavel, descricao, dataCadastro, dataAceite) {
    const params = {
        descricao_like: descricao,
        responsavel_like: responsavel,
      }
      if (dataCadastro) {
         params.dataCadastro_gte = dataCadastro;
      }
      if (dataAceite) {
         params.dataAceite_lte = dataAceite;
      }
    return api.get(`/chamados/`, {params});
  }
}
export default ChamadoServices;
