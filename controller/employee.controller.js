const pool = require("../config/db.js");
class EmployeeController {
  async create(req, res) {
    const employee = ({
      employeeId: req.body.employeeId,
      fullName: req.body.fullName,
      jobTitle: req.body.jobTitle,
      department: req.body.department,
      businessUnit: req.body.businessUnit,
      gender: req.body.gender,
      ethnicity: req.body.ethnicity,
      age: req.body.age,
      hireDate: req.body.hireDate,
      annualSalary: req.body.annualSalary,
      bonusPercentage: req.body.bonusPercentage,
      country: req.body.country,
      city: req.body.city,
      exitDate: req.body.exitDate,
    } = req.body);
    let conn;
    const queryString = `INSERT INTO Employees (employeeId, fullName, jobTitle, department, businessUnit, gender, ethnicity, age, hireDate, annualSalary, bonusPercentage, country, city, exitDate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    try {
      conn = await pool.getConnection();
      await conn.query(queryString, [
        employee.employeeId,
        employee.fullName,
        employee.jobTitle,
        employee.department,
        employee.businessUnit,
        employee.gender,
        employee.ethnicity,
        employee.age,
        employee.hireDate,
        employee.annualSalary,
        employee.bonusPercentage,
        employee.country,
        employee.city,
        employee.exitDate,
        employee.exitDate,
      ]);
      res.send("Employee data saved successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send("Some data is not valid or missing. Please check and try again.");
    } finally {
      if (conn) return conn.end();
    }
  }
  async getAll(req, res) {
    const { fullName, orderBy, limit, offset } = req.query;
    const queryString = `SELECT * FROM Employees  
    ${fullName ? `WHERE fullName LIKE '%${fullName}%'` : ""}  ${limit ? `LIMIT ${limit}` : ""}  ${
      offset ? `OFFSET ${offset}` : ""
    }  ${orderBy ? `ORDER BY ${orderBy} DESC` : ""} `;
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query(queryString);
      res.json(rows);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } finally {
      if (conn) return conn.end();
    }
  }

  async getCount(req, res) {
    const { fullName } = req.query;

    const queryString = `SELECT COUNT(*) as total FROM Employees ${
      fullName ? `WHERE fullName LIKE '%${fullName}%'` : ""
    }`;
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query(queryString);
      res.send({
        total: Number(rows[0].total),
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } finally {
      if (conn) return conn.end();
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM Employees WHERE employeeId = ?", [id]);
      res.json(rows[0]);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } finally {
      if (conn) return conn.end();
    }
  }
  async update(req, res) {
    const { id } = req.params;
    const employee = ({
      employeeId: req.body.employeeId,
      fullName: req.body.fullName,
      jobTitle: req.body.jobTitle,
      department: req.body.department,
      businessUnit: req.body.businessUnit,
      gender: req.body.gender,
      ethnicity: req.body.ethnicity,
      age: req.body.age,
      hireDate: req.body.hireDate,
      annualSalary: req.body.annualSalary,
      bonusPercentage: req.body.bonusPercentage,
      country: req.body.country,
      city: req.body.city,
      exitDate: req.body.exitDate,
    } = req.body);
    let conn;
    try {
      conn = await pool.getConnection();
      await conn.query(
        "UPDATE Employees SET employeeId = ?, fullName = ?, jobTitle = ?, department = ?, businessUnit = ?, gender = ?, ethnicity = ?, age = ?, hireDate = ?, annualSalary = ?, bonusPercentage = ?, country = ?, city = ?, exitDate = ? WHERE employeeId = ?",
        [
          employee.employeeId,
          employee.fullName,
          employee.jobTitle,
          employee.department,
          employee.businessUnit,
          employee.gender,
          employee.ethnicity,
          employee.age,
          employee.hireDate,
          employee.annualSalary,
          employee.bonusPercentage,
          employee.country,
          employee.city,
          employee.exitDate,
          id,
        ]
      );

      res.send("Employee data updated successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send("Some data is not valid or missing. Please check and try again.");
    } finally {
      if (conn) return conn.end();
    }
  }
  async delete(req, res) {
    const { id } = req.params;
    let conn;
    try {
      conn = await pool.getConnection();
      await conn.query("DELETE FROM Employees WHERE employeeId = ?", [id]);
      res.send("Employee data deleted successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } finally {
      if (conn) return conn.end();
    }
  }
}

module.exports = new EmployeeController();
