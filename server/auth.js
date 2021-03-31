import CognitoExpress from "cognito-express";
import dotenv from "dotenv";
dotenv.config();

const cognitoExpress = new CognitoExpress({
  region: process.env.AWS_DEFAULT_REGION,
  cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
  tokenUse: "id",
  tokenExpiration: 3600,
});

export const validateAuth = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] == "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    cognitoExpress.validate(token, (err) => {
      if (err) {
        res.status(401).send();
      } else {
        next();
      }
    });
  } else {
    res.status(401).send();
  }
};
