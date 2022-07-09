import { app } from "./app";
import { UserController } from "./UserController";

const userController = new UserController()






app.post("/user/signup", userController.signup)

app.post("/user/login", userController.login)

app.post("/follow/:id", userController.follow)

app.delete("/unfollow/:id", userController.unfollow)
