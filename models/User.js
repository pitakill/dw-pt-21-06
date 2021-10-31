const mysql = require("../store/mysql");

const query = (str, q) => {
  return new Promise((resolve, reject) => {
    mysql.query(str, q, (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results);
    });
  });
};

class User {
  constructor(options) {
    this.id = options.id;
    this.name = options.name;
    this.age = options.age;
    this.email = options.email;
    this.city = options.city;
  }

  async save() {
    try {
      const results = await query("INSERT INTO user SET ? ", this);
      return results;
    } catch (error) {
      throw error;
    }
  }

  static async get() {
    try {
      const results = await query("SELECT * FROM user");
      return results.map((e) => ({ ...e }));
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const results = await query("SELECT * FROM user WHERE id = ?", id);
      return results.map((e) => ({ ...e }));
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const users = await this.getById(id);
      if (users.length === 0) {
        const error = new Error("ERR_ID_NOT_FOUND");
        error.msg = `No user with id (${id})`;

        throw error;
      }

      await query(`DELETE FROM user WHERE id = ${users[0].id}`);
      return users[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
