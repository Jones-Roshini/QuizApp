const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const PORT = 7000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://jonesroshini2003:admin@cluster0.54q9jvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, default: 'Player' }
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const newUser = new User({ name, password, email });
    await newUser.save();
    res.status(201).json({ message: 'Saved Successfully' });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }
    if (user.password === password) {
      return res.status(201).json({ success: true, message: 'Successful' });
    } else {
      return res.status(400).json({ success: false, message: 'Password mismatch' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server issue' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started running at port ${PORT}`);
});
