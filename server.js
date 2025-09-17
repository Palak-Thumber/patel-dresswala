const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(express.json()); // <--- THIS LINE IS ESSENTIAL

// ✅ Serve frontend from public folder
app.use(express.static(path.join(__dirname, "public")));

// ✅ Handle root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Handle form POST
app.post("/api/bookings", (req, res) => {
  const { name, costume, date } = req.body;
  console.log("📦 Booking received:");
  console.log("Name:", name);
  console.log("Costume:", costume);
  console.log("Date:", date);

  res.json({ message: "Booking received successfully!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
