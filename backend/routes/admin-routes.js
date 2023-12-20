const express = require("express");
const adminRouter = express.Router;

const { addAdmin } = require("../contollers/admin-controller");

adminRouter.get("/signup", addAdmin);
adminRouter.get("/login", adminLogin);
adminRouter.get("/", getAdmin);
adminRouter.get("/:id", getAdminbyId);

module.exports = adminRouter;
