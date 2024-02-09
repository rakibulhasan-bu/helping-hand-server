import Gallery from "./gallery.model";
import { TGallery } from "./gallery.interface";

const createGalleryIntoDB = async (event: TGallery) => {
  return await Gallery.create(event);
};

const getAllGalleryByCategoryFromDB = async () => {
  const categories = [
    "চিকিৎসা",
    "শিক্ষা সহায়তা",
    "উষ্ণতার ছোয়া",
    "রামাদ্বান ফুড বাকেট",
    "স্বাবলম্বিতা",
    "অন্যান্য",
  ];

  const aggregatePromises = categories.map((category) =>
    Gallery.aggregate([
      {
        $match: { category: category },
      },
      {
        $addFields: { categoryOrder: categories.indexOf(category) },
      },
      {
        $sort: { categoryOrder: 1 },
      },
      {
        $group: {
          _id: "$category",
          images: { $push: "$$ROOT" },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          images: 1,
        },
      },
    ]),
  );

  const results = await Promise.all(aggregatePromises);
  return results.flat();
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
