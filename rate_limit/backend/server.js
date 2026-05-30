const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api/resource', (req, res) => {
    // Simulate a tiny bit of database latency (10ms)
    setTimeout(() => {
        res.status(200).json({
            status: "success",
            message: "Hello from Layer 3 (App Server)!",
            timestamp: new Date().toISOString()
        });
    }, 10);
});

app.listen(PORT, () => {
    console.log(`Backend mock server running on port ${PORT}`);
});
