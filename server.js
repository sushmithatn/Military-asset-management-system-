const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// connect db
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/assets', require('./routes/assets'));
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/purchase', require('./routes/purchase'));
app.use('/api/transfers', require('./routes/transfers'));
app.use('/api/movement', require('./routes/movement'));
app.use('/api/summary', require('./routes/summary'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
