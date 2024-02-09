import Event from "./event.model";
import { TEvent } from "./event.interface";

const createEventIntoDB = async (event: TEvent) => {
  return await Event.create(event);
};

const getAllEventByCategoryFromDB = async () => {
  const categories = [
    "চিকিৎসা",
    "শিক্ষা সহায়তা",
    "উষ্ণতার ছোয়া",
    "রামাদ্বান ফুড বাকেট",
    "স্বাবলম্বিতা",
    "অন্যান্য",
  ];

  const aggregatePromises = categories.map((category) =>
    Event.aggregate([
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
    ]),
  );

  const results = await Promise.all(aggregatePromises);
  return results.flat();
};

const getSingleEventById = async (eventId: string) => {
  return await Event.findById(eventId);
};

const getAllEventFromDB = async () => {
  return await Event.find();
};

// const getAllCourse = async (query: Record<string, unknown>) => {
//   const {
//     page = 1,
//     limit = 10,
//     sortBy,
//     sortOrder,
//     minPrice,
//     maxPrice,
//     tags,
//     startDate,
//     endDate,
//     language,
//     provider,
//     durationInWeeks,
//     level,
//   } = query;

//   const searchOptions: Record<string, unknown> = {};

//   if (language) {
//     searchOptions.language = language;
//   }
//   if (provider) {
//     searchOptions.provider = provider;
//   }
//   if (durationInWeeks) {
//     searchOptions.durationInWeeks = durationInWeeks;
//   }
//   if (level) {
//     searchOptions["details.level"] = level;
//   }
//   if (tags) {
//     searchOptions["tags.name"] = tags;
//   }
//   if (startDate && endDate) {
//     searchOptions.startDate = { $gte: startDate, $lte: endDate };
//   }
//   if (minPrice && maxPrice) {
//     searchOptions.price = { $gte: minPrice, $lte: maxPrice };
//   }
//   let sortOptions = {};
//   if (sortBy) {
//     sortOptions = { [sortBy as string]: 1 };
//   }
//   if (sortOrder === "asc" || sortOrder === "desc") {
//     sortOptions = sortOrder === "asc" ? { createdAt: 1 } : { createdAt: -1 };
//   }
//   const skip = (Number(page) - 1) * Number(limit);
//   const result = await Course.find(searchOptions)
//     .populate("createdBy")
//     .sort(sortOptions)
//     .skip(skip)
//     .limit(Number(limit))
//     .exec();

//   const total = await Course.countDocuments(searchOptions);
//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: {
//       courses: result,
//     },
//   };
// };

// const updateCourse = async (id: string, payload: Partial<TCourse>) => {
//   const { tags, details, ...remainingData } = payload;
//   const modifiedData: Record<string, unknown> = { ...remainingData };

//   if (tags && Object.keys(tags).length) {
//     for (const [key, value] of Object.entries(tags)) {
//       modifiedData[`tags.${key}`] = value;
//     }
//   }
//   if (details && Object.keys(details).length) {
//     for (const [key, value] of Object.entries(details)) {
//       modifiedData[`details.${key}`] = value;
//     }
//   }

//   return await Course.findByIdAndUpdate(id, modifiedData, {
//     new: true,
//     runValidators: true,
//   }).populate({
//     path: "createdBy",
//     select: "_id username email role",
//   });
// };

export const eventServices = {
  createEventIntoDB,
  getSingleEventById,
  getAllEventFromDB,
  getAllEventByCategoryFromDB,
};
