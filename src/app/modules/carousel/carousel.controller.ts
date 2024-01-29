import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { carouselServices } from "./carousel.service";

const createCarousel = CatchAsyncError(async (req: Request, res: Response) => {
  const carousel = req.body;

  const result = await carouselServices.createCarouselIntoDB(carousel);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Carousel created successfully",
    data: result,
  });
});

const getAllCarousels = CatchAsyncError(async (req: Request, res: Response) => {
  const result = await carouselServices.getAllCarouselFromDB();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Carousels retrieved successfully",
    data: result,
  });
});

export const carouselController = {
  createCarousel,
  getAllCarousels,
};
