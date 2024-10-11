const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());

console.log(app)

const PORT = process.env.PORT || 5000;
// Start the server using app.listen()
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

;