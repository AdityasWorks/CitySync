const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // For password hashing

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://sih:sih2024@cluster0.qf6bk.mongodb.net/Website', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    department: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
});

const User = mongoose.model('User', userSchema, 'user_data');

// Register route
app.post('/register', async (req, res) => {
    try {
        const { username, password, department, role, location } = req.body;

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password should be at least 6 characters long' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store user data in MongoDB
        const user = new User({
            username,
            password: hashedPassword,
            department,
            role,
            location,
        });

        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user', error: err });
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create a JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
