import { z } from "zod";

const createGalleryValidationSchema = z.object({
  body: z.object({
    imageUrl: z.string().url(),
    category: z.enum(["চিকিৎসা", "শিক্ষা", "প্রজেক্ট"]),
  }),
});

const updateGalleryValidationSchema = z.object({
  body: z.object({
    imageUrl: z.string().url(),
    category: z.enum(["চিকিৎসা", "শিক্ষা", "প্রজেক্ট"]),
  }),
});

export const galleryValidation = {
  createGalleryValidationSchema,
  updateGalleryValidationSchema,
};
