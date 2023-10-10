const express = require("express");
const path = require("path");
const pool = require("./controllers/dbContext")
const app = express();
const port = 8080; 


app.use(express.static(path.join(__dirname, "public")));


app.get("/test-db-connection", async (req, res) => {
    try {

        const connection = await pool.getConnection();

        connection.release();

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Define a route to serve the HTML page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
