require("dotenv").config();
const connectDB = require("./src/config/config");
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

startServer();
