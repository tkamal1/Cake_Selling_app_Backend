import User from "../../Models/model.user.js";

const UserCreate = async (req, res) => {
  const { U_name, U_email, U_phone } = req.body;

  try {
    const isPhone = await User.findOne({ U_phone });
    if (!isPhone) {
      const UserCreateResponse = await User.create({
        U_name,
        U_email,
        U_phone,
      });
      if (!UserCreateResponse) {
        return res.status(404).json({
          success: false,
          msg: "User Create Faild",
        });
      }
      return res.status(201).json({
        success: true,
        msg: "User create SuccessFul",
        data: UserCreateResponse,
      });
    }
    return res.status(400).json({
      success: false,
      msg: "User Already Exist",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error or user field error",
      error: error.message,
    });
  }
};

export default UserCreate;
