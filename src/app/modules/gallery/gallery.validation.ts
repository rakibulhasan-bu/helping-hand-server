import { z } from "zod";

const createGalleryValidationSchema = z.object({
  body: z.object({
    imageUrl: z.string().url(),
    category: z.enum([
      "চিকিৎসা",
      "শিক্ষা সহায়তা",
      "উষ্ণতার ছোয়া",
      "রামাদ্বান ফুড বাকেট",
      "স্বাবলম্বিতা",
      "অন্যান্য",
    ]),
  }),
});

const updateGalleryValidationSchema = z.object({
  body: z.object({
    imageUrl: z.string().url(),
    category: z.enum([
      "চিকিৎসা",
      "শিক্ষা সহায়তা",
      "উষ্ণতার ছোয়া",
      "রামাদ্বান ফুড বাকেট",
      "স্বাবলম্বিতা",
      "অন্যান্য",
    ]),
  }),
});

export const galleryValidation = {
  createGalleryValidationSchema,
  updateGalleryValidationSchema,
};
