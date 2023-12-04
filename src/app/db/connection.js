import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "world_cup_node_db",
});

conn.connect();

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql  instrução sql a ser executada
 * @param {string=id || [selecao, id]} values valores a serem passados ao sql
 * @param {string} rejectMsg mensagem a ser exibida
 * @returns objeto Promise
 */
export const operation = (sql, values = "", rejectMsg) => {
  return new Promise((resolve, reject) => {
    conn.query(sql, values, (error, result) => {
      if (error) return reject(rejectMsg);
      return resolve(JSON.parse(JSON.stringify(result)));
    });
  });
};

export default conn;
