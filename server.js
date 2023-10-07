const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // You can choose any port you like

// Serve static files (e.g., HTML, CSS, and JavaScript)
app.use(express.static(path.join(__dirname, "public")));

// Define a route to serve the HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});