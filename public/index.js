const button = document.getElementById("myButton");
const messageDiv = document.getElementById("messageDiv");

button.addEventListener("click", async () => {
    try {
        await testDatabaseConnection();
        messageDiv.textContent = "Database connection successful!";
    } catch (error) {
        messageDiv.textContent = "Database connection failed: " + error.message;
    }
});

async function testDatabaseConnection() {
    const response = await fetch("/test-db-connection");
    const result = await response.json();
    if (result.success !== true) {
        throw new Error(result.error);
    }
}