const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 5000;
const connectDB = require("./config/connectDB");
connectDB(process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/register", require("./routes/registerRoutes"));
app.use("/api/login", require("./routes/loginRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/participations", require("./routes/participationRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/admin", require("./routes/adminRoutes"));
// app.use("/api/user", require("./routes/eventRoutes"));

const { errorHandler } = require("./middleware/errorMiddleware");
app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));
