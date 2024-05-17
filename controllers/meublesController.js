const Meuble = require("./../models/meubleModel");
exports.getAllMeubles = async (req, res) => {
  try {
    const meubles = await Meuble.find();
    res.status(200).json({
      status: "success",
      results: meubles.length,
      data: {
        meubles,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.createMeuble = async (req, res) => {
  try {
    const newMeuble = await Meuble.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        meuble: newMeuble,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error",
    });
  }
};
exports.getMeuble = async (req, res) => {
  try {
    const meubles = await Meuble.findById(req.params.id);

    res.status(200).json({
      status: "success",

      data: {
        meubles,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
exports.delMeuble = async (req, res) => {
  try {
    await Meuble.findByIdAndDelete(req.params.id);
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
exports.updateMeuble = async (req, res) => {
  try {
    const meuble = await Meuble.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        meuble,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
