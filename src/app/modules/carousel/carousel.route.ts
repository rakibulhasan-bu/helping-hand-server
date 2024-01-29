import express from "express";
import { carouselController } from "./carousel.controller";
import validateRequest from "../../middleware/validateRequest";
import { carouselValidation } from "./carousel.validation";
// import auth from "../../middleware/auth";
// import USER_ROLE from "../user/user.const";

const carouselRoute = express.Router();

carouselRoute.post(
  "/create-carousel",
  // auth(USER_ROLE.admin),
  validateRequest(carouselValidation.carouselValidationSchema),
  carouselController.createCarousel,
);

carouselRoute.get("/carousels", carouselController.getAllCarousels);

export default carouselRoute;
