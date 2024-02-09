import { z } from "zod";

const createEventValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(3),
    details: z.string().trim().min(3),
    imageUrl: z.string().url(),
    category: z.enum([
      "চিকিৎসা",
      "শিক্ষা সহায়তা",
      "উষ্ণতার ছোয়া",
      "রামাদ্বান ফুড বাকেট",
      "স্বাবলম্বিতা",
      "অন্যান্য",
    ]),
    status: z.enum(["running", "end"]),
  }),
});

const updateEventValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(3),
    details: z.string().trim().min(3),
    imageUrl: z.string().url(),
    category: z.enum([
      "চিকিৎসা",
      "শিক্ষা",
      "উষ্ণতার ছোয়া",
      "রামাদ্বান ফুড বাকেট",
      "স্বাবলম্বিতা",
      "অন্যান্য",
    ]),
    status: z.enum(["running", "end"]),
  }),
});

export const eventValidation = {
  createEventValidationSchema,
  updateEventValidationSchema,
};
