exports.protectorMW = async (req, res, next) => {
  try {
    let token;
    // 1) thabat si el user logged in or not (3andou token wala lé !)
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(401).json({
        message: "You are not logged in !",
      });
    }

    // 2) thabat si el token valid or not !
    // 3) thabat si el user exist wala lé !
    // 4) thabat si el token tsan3et 9bal wala ba3d e5er pass update !
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.checkRoleMW = (...roles) => {
  return async (req, res, next) => {
    // TODO: Add role checking logic
    next();
  };
};