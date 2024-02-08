import express from "express";
import { galleryControllers } from "./gallery.controller";
import { galleryValidation } from "./gallery.validation";
import validateRequest from "../../middleware/validateRequest";

const galleryRouter = express.Router();

galleryRouter.post(
  "/create-gallery",
  validateRequest(galleryValidation.createGalleryValidationSchema),
  galleryControllers.createGallery,
);

galleryRouter.get("/gallery", galleryControllers.getAllGallery);

galleryRouter.get(
  "/category-gallery",
  galleryControllers.getAllGalleryByCategory,
);

galleryRouter.get("/gallery/:galleryId", galleryControllers.getSingleGallery);

export default galleryRouter;
