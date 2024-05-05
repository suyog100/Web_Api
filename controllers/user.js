const User = require("../models/user");

async function addUser(req, res) {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ phone });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  try {
    const user = new User({ name, email, phone });
    await user.save();
    return res
      .status(201)
      .json({ message: "User added successfully", user, sucess: true });
  } catch (e) {
    return res.status(500).json({ message: e.message, sucess: false });
  }
}

module.exports = { addUser };
