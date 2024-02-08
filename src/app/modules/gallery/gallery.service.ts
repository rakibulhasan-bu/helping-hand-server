import Gallery from "./gallery.model";
import { TGallery } from "./gallery.interface";

const createGalleryIntoDB = async (event: TGallery) => {
  return await Gallery.create(event);
};

const getAllGalleryByCategoryFromDB = async () => {
  return await Gallery.aggregate([
    {
      $group: {
        _id: "$category",
        events: { $push: "$$ROOT" },
      },
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        events: 1,
      },
    },
  ]);
};

const getSingleGalleryById = async (eventId: string) => {
  return await Gallery.findById(eventId);
};

const getAllGalleryFromDB = async () => {
  return await Gallery.find();
};

export const galleryServices = {
  createGalleryIntoDB,
  getAllGalleryByCategoryFromDB,
  getAllGalleryFromDB,
  getSingleGalleryById,
};
