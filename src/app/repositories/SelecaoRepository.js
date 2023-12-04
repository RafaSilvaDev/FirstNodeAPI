import {operation} from "../db/connection.js";

class SelecaoRepository {
  create(selecao) {
    const sql = "INSERT INTO selecao SET ?";
    return operation(sql, selecao, "Não foi possível cadastrar uma nova seleção.")
  }

  findAll() {
    const sql = "SELECT * FROM selecao";
    return operation(sql, "Não foi possível localizar dados.")
  }

  findById(id) {
    const sql = "SELECT * FROM selecao WHERE id=?";
    return operation(sql, id, "Não foi possível localizar dados.")
  }

  update(id, selecao) {
    const sql = "UPDATE selecao SET ? WHERE id=?";
    return operation(sql, [selecao, id], "Não foi possível realizar esta operação.")
  }

  delete(id) {
    const sql = "DELETE FROM selecao WHERE id=?";
    return operation(sql, id, "Não foi possível realizar esta operação.")
  }
}

export default new SelecaoRepository();
