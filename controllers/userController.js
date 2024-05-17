const User = require("./../models/userModel");
exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(201).json({
      status: "success",
      data: {
        users: Users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error",
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",

      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        users: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error",
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
