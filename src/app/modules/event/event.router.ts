import express from "express";
import { eventControllers } from "./event.controller";
import { eventValidation } from "./event.validation";
import validateRequest from "../../middleware/validateRequest";
// import auth from "../../middleware/auth";
// import USER_ROLE from "../user/user.const";

const eventRouter = express.Router();

eventRouter.post(
  "/create-event",
  // auth(USER_ROLE.admin),
  validateRequest(eventValidation.createEventValidationSchema),
  eventControllers.createEvent,
);

eventRouter.get("/events", eventControllers.getAllEvent);

// courseRouter.get(
//   "/courses/:courseId/reviews",
//   courseControllers.getCourseByIdWithReviews,
// );

// courseRouter.get("/course/best", courseControllers.getBestCourse);

// courseRouter.put(
//   "/courses/:courseId",
//   auth(USER_ROLE.admin),
//   validateRequest(courseValidation.updateCourseValidationSchema),
//   courseControllers.updateCourse,
// );

export default eventRouter;
