const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

fs.open("tag.db", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});

const db = new sqlite3.Database(
  "./tag.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);

    console.log("connection succesful");
  }
);

db.run(
  "CREATE TABLE tagok(id INTEGER PRIMARY KEY AUTOINCREMENT, vezeteknev TEXT NOT NULL, keresztnev TEXT NOT NULL, munkahely TEXT NOT NULL, email TEXT NOT NULL)"
);