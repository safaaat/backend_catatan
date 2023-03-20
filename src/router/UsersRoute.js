import express from "express";
import { register, login, logout } from "../controllers/Users.js";
import { RegisterValidasi, LoginValidasi } from "../middleware/validation/UserValidation.js";

const router = express.Router();

router.post("/register", RegisterValidasi, register);
router.post("/login", LoginValidasi, login);
router.delete("/logout", logout);

export default router;



