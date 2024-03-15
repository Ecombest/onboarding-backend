const pool = require("../config/db.js");

class UserController {
  async getUsers(req, res) {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM users");
      res.json(rows);
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }

  async getUserById(req, res) {
    const { id } = req.params;
    let conn;

    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
      conn.release(); // Release the connection back to the pool
      res.json(rows[0]);
    } catch (err) {
      console.error("Error fetching user:", err);
      res.status(500).send("Internal Server Error");
    } finally {
      if (conn) return conn.end();
    }
  }
  async createUser(req, res) {
    const { username, email, avatar } = req.body;

    let conn;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();
      await conn.query("INSERT INTO users (username, email, avatar) VALUES (?, ?)", [username, email, avatar]);
      res.json({
        message: "User created",
      });
      await conn.commit();
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).send("Internal Server Error");
      await conn.rollback();
    } finally {
      await conn.release();
      if (conn) return conn.end();
    }
  }
  async updateUser(req, res) {
    const { id } = req.params;
    const { username, email, avatar } = req.body;
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("UPDATE users SET username = ?, email = ?, avatar = ? WHERE id = ?", [
        username,
        email,
        avatar,
        id,
      ]);
      res.json(rows);
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).send("Internal Server Error");
    } finally {
      if (conn) return conn.end();
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("DELETE FROM users WHERE id = ?", [id]);
      res.json(rows);
    } catch (err) {
      console.error("Error deleting user:", err);
      res.status(500).send("Internal Server Error");
    } finally {
      if (conn) return conn.end();
    }
  }
}

module.exports = new UserController();
