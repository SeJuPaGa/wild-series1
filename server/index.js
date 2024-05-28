require("dotenv").config();

require("./database/client").checkConnection();

const app = require("./app/config");

const port = process.env.APP_PORT;

app
  .listen(port, () => {
    // eslint-disable-next-line no-unused-expressions
    `Server is running on http://localhost:${port}`;
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
