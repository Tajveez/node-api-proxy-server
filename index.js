const express = require("express");
const cors = require("cors");
const rateLimiter = require("express-rate-limit");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// Rate Limiting
const limiter = rateLimiter({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: "Api rate limit exhausted",
});

// Setting the limit for API call
app.use(limiter);
app.set("trust proxy", 1);

// Setting the static folder
app.use(express.static("public"));

app.use("/api", require("./routes"));

// Enable
app.use(cors());

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
