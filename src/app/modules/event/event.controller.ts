import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { eventServices } from "./event.service";
// import { reviewService } from "../review/review.services";
// import AppError from "../../error/AppError";

const createEvent = CatchAsyncError(async (req: Request, res: Response) => {
  const event = req.body;
  const result = await eventServices.createEventIntoDB(event);

  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Event created successfully",
    data: result,
  });
});

const getAllEvent = CatchAsyncError(async (req: Request, res: Response) => {
  const result = await eventServices.getAllEventFromDB();

  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Events retrieved successfully!",
    data: result,
  });
});

const getAllEventByCategory = CatchAsyncError(
  async (req: Request, res: Response) => {
    const result = await eventServices.getAllEventByCategoryFromDB();

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Events retrieved successfully!",
      data: result,
    });
  },
);

const getSingleEvent = CatchAsyncError(async (req: Request, res: Response) => {
  const { eventId } = req.params;
  const result = await eventServices.getSingleEventById(eventId);

  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Event are retrieved successfully!",
    data: result,
  });
});

// const getCourseByIdWithReviews = CatchAsyncError(
//   async (req: Request, res: Response) => {
//     const { courseId } = req.params;

//     const course = await courseServices.getSingleCourseById(courseId);
//     if (!course) {
//       throw new AppError(404, `${courseId} is not a valid course id!`);
//     }

//     const reviews = await reviewService.getReviewByCourseID(courseId);
//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: "Course with reviews retrieved successfully",
//       data: { course, reviews },
//     });
//   },
// );

// const getBestCourse = CatchAsyncError(async (req: Request, res: Response) => {
//   const review = await reviewService.highestReviews();
//   const course = await courseServices.getSingleCourseById(review?._id);
//   res.status(200).json({
//     success: true,
//     statusCode: 200,
//     message: "Best course retrieved successfully",
//     data: {
//       course,
//       averageRating: review?.averageRating,
//       reviewCount: review?.reviewCount,
//     },
//   });
// });

// const updateCourse = CatchAsyncError(async (req: Request, res: Response) => {
//   const { courseId } = req.params;

//   const course = await courseServices.getSingleCourseById(courseId);
//   if (!course) {
//     throw new AppError(404, `${courseId} is not a valid course id!`);
//   }

//   const result = await courseServices.updateCourse(courseId, req.body);

//   res.status(200).json({
//     success: true,
//     statusCode: 200,
//     message: "Course updated successfully",
//     data: result,
//   });
// });

export const eventControllers = {
  createEvent,
  getAllEvent,
  getAllEventByCategory,
  getSingleEvent,
};
