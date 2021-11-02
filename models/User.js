const mysql = require("../store/mysql");
const mongodb = require("../store/mongodb");
const { ObjectId } = require("bson");

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

const collection = mongodb.collection("users");

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
      // MySQL
      // const result = await query("INSERT INTO user SET ? ", this);
      // return result.insertId;

      // mongo
      delete this.id;
      const result = await collection.insertOne(this);
      return result.insertedId;
    } catch (error) {
      throw error;
    }
  }

  static async obtain() {
    try {
      // MySQL
      // const results = await query("SELECT * FROM user");
      // return results.map((e) => ({ ...e }));

      // mongo
      return await collection.find().toArray();
    } catch (error) {
      throw error;
    }
  }

  static async obtainById(id) {
    try {
      // MySQL
      // const results = await query("SELECT * FROM user WHERE id = ?", id);
      // return results.map((e) => ({ ...e }));

      // mongo
      return await collection.findOne({ _id: ObjectId(id) });
    } catch (error) {
      throw error;
    }
  }

  static async remove(id) {
    try {
      // MySQL
      // const users = await this.obtainById(id);
      // if (users.length === 0) {
      //   const error = new Error("ERR_ID_NOT_FOUND");
      //   error.msg = `No user with id (${id})`;
      //
      //   throw error;
      // }
      //
      // await query(`DELETE FROM user WHERE id = ${users[0].id}`);
      // return users[0].id;

      // mongo
      const result = await collection.findOneAndDelete({ _id: ObjectId(id) });
      return result.value._id;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
