import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { galleryServices } from "./gallery.service";

const createGallery = CatchAsyncError(async (req: Request, res: Response) => {
  const gallery = req.body;
  const result = await galleryServices.createGalleryIntoDB(gallery);

  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Gallery created successfully",
    data: result,
  });
});

const getAllGallery = CatchAsyncError(async (req: Request, res: Response) => {
  const result = await galleryServices.getAllGalleryFromDB();

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Gallery retrieved successfully!",
    data: result,
  });
});

const getAllGalleryByCategory = CatchAsyncError(
  async (req: Request, res: Response) => {
    const result = await galleryServices.getAllGalleryByCategoryFromDB();

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Gallery retrieved successfully!",
      data: result,
    });
  },
);

const getSingleGallery = CatchAsyncError(
  async (req: Request, res: Response) => {
    const { galleryId } = req.params;
    const result = await galleryServices.getSingleGalleryById(galleryId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Gallery are retrieved successfully!",
      data: result,
    });
  },
);

export const galleryControllers = {
  createGallery,
  getAllGallery,
  getAllGalleryByCategory,
  getSingleGallery,
};
