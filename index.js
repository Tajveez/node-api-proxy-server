const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api", (req, res) => {
  res.json({ success: true });
});

// Enable
app.use(cors());

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
