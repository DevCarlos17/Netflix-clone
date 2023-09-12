import User from "../models/User.js"
import jsonwebtoken from "jsonwebtoken"
import { SECRET_TOKEN } from "../config.js"

const jwt = jsonwebtoken;

export const singup = async (req, res, next) => {


  const { username, email, password } = req.body;

  const isEmailExist = await User.findOne({ email });
  if (isEmailExist) {
    return res.status(400).json({ error: "El email ya se encuentra registrado", auth: false, token: null, })
  }

  try {
    const newUser = new User({
      name: username,
      image: "",
      email,
      emailVerified: new Date(),
      hashedPassword: password
    });

    //Hash password
    newUser.hashedPassword = await newUser.encryptPassword(newUser.hashedPassword);
    await newUser.save();
    console.log(newUser)
    return res.status(200).json({ auth: true, user: newUser })

  } catch (error) {
    res.status(400).json({ error })

  }

}

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  //Validate email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Email doesn't register", auth: false, token: null, })
  }

  //Validate password 
  const validPassword = await user.validatePassword(password);
  if (!validPassword) {
    return res.status(400).json({ error: "Invalid password", auth: false, token: null, })
  }

  const token = jwt.sign({ id: user._id }, SECRET_TOKEN, {
    expiresIn: 60 * 60 * 24 * 30
  })

  return res.json({ auth: true, token, user })
}