require("dotenv").config();

const app = require("./src/app");
const { PORT } = require("./src/shared/common/defs");

const ENV_PORT = process.env.PORT;
const PORT_LISTEN = ENV_PORT || PORT;

app.listen(PORT_LISTEN, () =>
  console.log(`sever listen at port ${PORT_LISTEN}`)
);
